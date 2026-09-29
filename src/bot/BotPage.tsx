import React, { useState, useEffect, useRef } from 'react';
import { BotHeader } from './components/BotHeader';
import { ChatMessage } from './components/ChatMessage';
import { TypingIndicator } from './components/TypingIndicator';
import { PlanSelector } from './components/PlanSelector';
import { DeviceSelector } from './components/DeviceSelector';
import { DeviceInstructions } from './components/DeviceInstructions';
import { ChatInputBar, InputKind } from './components/ChatInputBar';
import { OrderReview } from './components/OrderReview';
import { PaymentStep } from './components/PaymentStep';
import { PaymentSuccess } from './components/PaymentSuccess';
import { DebugPanel } from './components/DebugPanel';
import { BoraRobot } from './components/BoraRobot';
import { BotStep, BotOrder, ChatMessageItem, CustomerData, DeviceInfo, PaymentStatus } from './types/bot';
import { PricingPlan } from '../types';
import { generateOrderId, maskCpf } from './config/botConfig';
import { saveBotSession, loadBotSession, clearBotSession } from './services/sessionService';
import { ArrowRight, Sparkles, ShieldCheck, Lock } from 'lucide-react';

interface BotPageProps {
  onBackToSite: () => void;
}

export const BotPage: React.FC<BotPageProps> = ({ onBackToSite }) => {
  // Initialize state from session storage if available
  const [orderId, setOrderId] = useState<string>(() => {
    const saved = loadBotSession();
    return saved?.orderId || generateOrderId();
  });

  const [currentStep, setCurrentStep] = useState<BotStep>(() => {
    const saved = loadBotSession();
    return (saved?.step as BotStep) || 'WELCOME';
  });

  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const [customer, setCustomer] = useState<CustomerData>(() => {
    const saved = loadBotSession();
    return {
      name: saved?.customerName || '',
      email: saved?.customerEmail || '',
      phone: saved?.customerPhone || '',
      cpf: saved?.customerCpf || '',
      consent: saved?.customerConsent ?? true,
    };
  });

  const [device, setDevice] = useState<DeviceInfo>(() => {
    const saved = loadBotSession();
    return {
      category: saved?.deviceCategory || '',
      categoryLabel: saved?.deviceCategoryLabel || '',
      detail: saved?.deviceDetail || '',
      detailLabel: saved?.deviceDetailLabel || '',
      installed: saved?.appInstalled ?? null,
    };
  });

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(() => {
    const saved = loadBotSession();
    return (saved?.paymentStatus as PaymentStatus) || 'idle';
  });

  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Progressive Single-Input State
  const [currentInputValue, setCurrentInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');

  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatScrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat smoothly
  const scrollToBottom = () => {
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, currentStep]);

  // Persist session
  useEffect(() => {
    saveBotSession({
      step: currentStep,
      orderId,
      planId: selectedPlan?.id,
      planName: selectedPlan?.name,
      planPrice: selectedPlan?.priceFormatted,
      planPeriod: selectedPlan?.period,
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      customerCpf: customer.cpf,
      customerConsent: customer.consent,
      deviceCategory: device.category,
      deviceCategoryLabel: device.categoryLabel,
      deviceDetail: device.detail,
      deviceDetailLabel: device.detailLabel,
      appInstalled: device.installed,
      paymentStatus,
    });
  }, [currentStep, orderId, selectedPlan, customer, device, paymentStatus]);

  // Helper to add bot message with natural typing delay
  const addBotMessage = (text: string, delay = 450) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: `msg-${Date.now()}-${Math.random()}`,
          sender: 'bot',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      scrollToBottom();
    }, delay);
  };

  // Helper to add user message immediately
  const addUserMessage = (text: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: `msg-${Date.now()}-${Math.random()}`,
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    scrollToBottom();
  };

  // ==========================================
  // FLOW TRANSITIONS
  // ==========================================

  // 1. WELCOME -> ASK_NAME
  const handleStartOnboarding = () => {
    setCurrentStep('ASK_NAME');
    setCurrentInputValue('');
    setInputError('');
    addBotMessage('Olá! 👋\n\nEu sou o assistente digital da BoraFlix e vou te acompanhar em tudo.\n\nAntes de começarmos, como posso te chamar?');
  };

  // 2. CONFIRM NAME -> PLAN_SELECTION
  const handleConfirmName = () => {
    const cleanName = currentInputValue.trim();
    if (!cleanName || cleanName.length < 2) {
      setInputError('Por favor, informe seu nome.');
      return;
    }

    setCustomer(prev => ({ ...prev, name: cleanName }));
    addUserMessage(`Pode me chamar de ${cleanName}.`);
    setCurrentInputValue('');
    setInputError('');

    setCurrentStep('PLAN_SELECTION');
    addBotMessage(
      `Prazer, ${cleanName}! 💙\n\nVou deixar tudo preparado para você.\n\nPrimeiro, escolha o plano que melhor atende você e sua família:`
    );
  };

  // 3. SELECT PLAN -> DEVICE_SELECTION
  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    addUserMessage(`Escolhi o Plano ${plan.name} (${plan.priceFormatted}${plan.period}).`);

    setCurrentStep('DEVICE_SELECTION');
    addBotMessage(
      `Ótima escolha, ${customer.name.split(' ')[0] || ''}! 🍿 O Plano ${plan.name} libera acesso total em até 4 telas simultâneas em 4K Ultra HD.\n\nEm qual aparelho você pretende assistir com mais frequência?`
    );
  };

  // 4. CONFIRM DEVICE -> APP_INSTRUCTIONS
  const handleConfirmDevice = (
    category: { id: string; label: string },
    detail: { id: string; label: string }
  ) => {
    const updatedDevice: DeviceInfo = {
      category: category.id,
      categoryLabel: category.label,
      detail: detail.id,
      detailLabel: detail.label,
      installed: null,
    };
    setDevice(updatedDevice);

    addUserMessage(`Vou assistir no(a) ${category.label} (${detail.label}).`);

    setCurrentStep('APP_INSTRUCTIONS');
    addBotMessage(
      `Perfeito! 📺 Para seu aparelho (${detail.label}), preparei uma orientação rápida de instalação para adiantar seu acesso:`
    );
  };

  // 5. CONFIRM APP INSTALLATION -> ASK_EMAIL
  const handleConfirmInstallation = (installed: boolean) => {
    setDevice(prev => ({ ...prev, installed }));

    if (installed) {
      addUserMessage('Sim, já instalei o aplicativo no meu aparelho!');
    } else {
      addUserMessage('Ainda não instalei, vou querer o auxílio do suporte no WhatsApp.');
    }

    setCurrentStep('ASK_EMAIL');
    setCurrentInputValue(customer.email || '');
    setInputError('');
    addBotMessage(
      'Excelente! Aparelho registrado no sistema. ✅\n\nAgora vamos aos dados do titular. Qual é o seu e-mail principal para envio dos dados da conta?'
    );
  };

  // 6. CONFIRM EMAIL -> ASK_PHONE
  const handleConfirmEmail = () => {
    const cleanEmail = currentInputValue.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setInputError('Informe um e-mail válido (ex: seuemail@exemplo.com).');
      return;
    }

    setCustomer(prev => ({ ...prev, email: cleanEmail }));
    addUserMessage(cleanEmail);
    setCurrentInputValue(customer.phone || '');
    setInputError('');

    setCurrentStep('ASK_PHONE');
    addBotMessage(
      'Perfeito! 📱 E qual é o seu número de WhatsApp com DDD para liberação do acesso e atendimento prioritário?'
    );
  };

  // 7. CONFIRM PHONE -> ASK_CPF
  const handleConfirmPhone = () => {
    const digits = currentInputValue.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 11) {
      setInputError('Informe um WhatsApp válido com DDD (ex: 85 99999-9999).');
      return;
    }

    setCustomer(prev => ({ ...prev, phone: currentInputValue.trim() }));
    addUserMessage(currentInputValue.trim());
    setCurrentInputValue(customer.cpf || '');
    setInputError('');

    setCurrentStep('ASK_CPF');
    addBotMessage(
      'Anotado! 🪪 Para emissão do comprovante do seu pedido e proteção da assinatura, informe seu CPF:'
    );
  };

  // 8. CONFIRM CPF -> REVIEW
  const handleConfirmCpf = () => {
    const digits = currentInputValue.replace(/\D/g, '');
    if (digits.length !== 11) {
      setInputError('Informe um CPF válido com 11 dígitos.');
      return;
    }

    setCustomer(prev => ({ ...prev, cpf: currentInputValue.trim() }));
    addUserMessage(maskCpf(currentInputValue.trim()));
    setCurrentInputValue('');
    setInputError('');

    setCurrentStep('REVIEW');
    addBotMessage(
      'Tudo preparado! Confere se está tudo certinho antes de irmos para o pagamento 👇'
    );
  };

  // 9. PROCEED TO PAYMENT
  const handleProceedToPayment = () => {
    addUserMessage('Conferi o resumo. Quero prosseguir para o pagamento.');
    setCurrentStep('PAYMENT');
    setPaymentStatus('pending');
    addBotMessage(
      `Perfeito! Geramos o PIX do seu pedido (${orderId}).\n\nVocê pode copiar o código PIX ou escanear o QR Code no seu aplicativo do banco para ativação imediata:`
    );
  };

  // 10. SIMULATE OR CONFIRM PAYMENT
  const handleSimulatePaymentStatus = (status: PaymentStatus) => {
    setPaymentStatus(status);
    if (status === 'paid') {
      setCurrentStep('PAYMENT_CONFIRMED');
      addBotMessage(
        `✓ Pagamento confirmado com sucesso! 🎉\n\nSeu pedido ${orderId} foi validado no sistema. Clique no botão abaixo para receber seu acesso oficial no WhatsApp!`
      );
    }
  };

  // RESET SESSION
  const handleResetSession = () => {
    clearBotSession();
    const newId = generateOrderId();
    setOrderId(newId);
    setCurrentStep('WELCOME');
    setSelectedPlan(null);
    setCustomer({ name: '', email: '', phone: '', cpf: '', consent: true });
    setDevice({ category: '', categoryLabel: '', detail: '', detailLabel: '', installed: null });
    setPaymentStatus('idle');
    setMessages([]);
    setCurrentInputValue('');
    setInputError('');
  };

  // Quick dev fill
  const handleFillMockData = () => {
    setCustomer({
      name: 'João da Silva Santos',
      email: 'joao.teste@email.com',
      phone: '(85) 99876-5432',
      cpf: '123.456.789-00',
      consent: true,
    });
    setDevice({
      category: 'smart_tv',
      categoryLabel: 'Smart TV',
      detail: 'samsung',
      detailLabel: 'Samsung (Tizen)',
      installed: true,
    });
    if (!selectedPlan) {
      setSelectedPlan({
        id: 'semestral',
        name: 'Semestral',
        priceFormatted: 'R$ 120,00',
        priceNumber: '120,00',
        period: '/semestre',
        description: 'Plano Semestral',
        features: ['Acesso a +60.000 títulos', '4 telas em 4K'],
        ctaText: 'ASSINAR SEMESTRAL',
        whatsappMessage: 'Olá! Vim pelo site...',
      });
    }
  };

  const currentOrder: BotOrder = {
    orderId,
    planId: selectedPlan?.id || 'semestral',
    planName: selectedPlan?.name || 'Semestral',
    planPrice: selectedPlan?.priceFormatted || 'R$ 120,00',
    planPeriod: selectedPlan?.period || '/semestre',
    device,
    customer,
    paymentStatus,
    createdAt: new Date().toISOString(),
  };

  // Check if current step requires the text composer
  const isInputStep =
    currentStep === 'ASK_NAME' ||
    currentStep === 'ASK_EMAIL' ||
    currentStep === 'ASK_PHONE' ||
    currentStep === 'ASK_CPF';

  const getInputConfig = (): { kind: InputKind; placeholder: string; onSubmit: () => void } => {
    switch (currentStep) {
      case 'ASK_NAME':
        return {
          kind: 'text',
          placeholder: 'Mensagem (Digite seu nome)...',
          onSubmit: handleConfirmName,
        };
      case 'ASK_EMAIL':
        return {
          kind: 'email',
          placeholder: 'Mensagem (Digite seu e-mail)...',
          onSubmit: handleConfirmEmail,
        };
      case 'ASK_PHONE':
        return {
          kind: 'tel',
          placeholder: 'Mensagem (Seu WhatsApp com DDD)...',
          onSubmit: handleConfirmPhone,
        };
      case 'ASK_CPF':
        return {
          kind: 'cpf',
          placeholder: 'Mensagem (Seu CPF 000.000.000-00)...',
          onSubmit: handleConfirmCpf,
        };
      default:
        return {
          kind: 'text',
          placeholder: 'Mensagem...',
          onSubmit: () => {},
        };
    }
  };

  const inputConfig = getInputConfig();

  return (
    <div className="h-[100dvh] whatsapp-chat-bg text-slate-100 flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* WhatsApp Chat Sticky Header */}
      <BotHeader
        currentStep={currentStep}
        orderId={orderId}
        onReset={handleResetSession}
        onBackToSite={onBackToSite}
      />

      {/* Main WhatsApp Message Container */}
      <main
        ref={chatScrollContainerRef}
        className="flex-1 w-full max-w-2xl mx-auto px-3 sm:px-4 py-3 flex flex-col justify-start overflow-y-auto z-10"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* STEP 1: WELCOME SCREEN (WhatsApp Welcoming Greeting) */}
        {currentStep === 'WELCOME' && (
          <div className="my-auto py-6 sm:py-8 text-center animate-fadeIn max-w-sm mx-auto flex flex-col items-center">
            {/* Living Character in WhatsApp Greeting */}
            <div className="mb-4">
              <BoraRobot size="hero" state="idle" />
            </div>

            {/* Verified Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182334] border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-2.5 shadow-sm">
              <Sparkles size={12} className="text-cyan-400" />
              <span>Atendimento Oficial BoraFlix</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Olá! Vamos preparar seu acesso?
            </h1>

            <p className="text-xs sm:text-sm text-[#8696a0] mt-2 leading-relaxed">
              Vou te ajudar a escolher seu plano, preparar seu aparelho e liberar suas telas em poucos minutos.
            </p>

            {/* WhatsApp Style Start Button */}
            <div className="mt-6 w-full space-y-2.5">
              <button
                type="button"
                onClick={handleStartOnboarding}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 transition-all duration-200 active:scale-95 group"
              >
                <span>COMEÇAR CONVERSA</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8696a0]">
                <ShieldCheck size={13} className="text-[#25d366]" />
                <span>Atendimento seguro • Sem fidelidade</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2+: ACTIVE WHATSAPP CONVERSATION */}
        {currentStep !== 'WELCOME' && (
          <div className="space-y-2 w-full pb-2">
            {/* WhatsApp Centered Date Pill */}
            <div className="flex justify-center my-1 select-none">
              <span className="text-[10.5px] font-sans font-medium px-3 py-0.5 rounded-lg bg-[#182232] text-[#8696a0] shadow-sm uppercase tracking-wider">
                Hoje
              </span>
            </div>

            {/* WhatsApp End-to-End Encryption Security Notice */}
            <div className="flex justify-center my-2 px-2 text-center select-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#182334]/80 border border-white/[0.05] text-[11px] text-[#ffd279] max-w-sm leading-tight shadow-sm">
                <Lock size={12} className="flex-shrink-0 text-[#ffd279]" />
                <span>As mensagens e dados deste atendimento são protegidos com segurança pela BoraFlix.</span>
              </div>
            </div>

            {/* Messages Feed */}
            {messages.map((msg, index) => (
              <ChatMessage
                key={msg.id}
                sender={msg.sender}
                text={msg.text}
                timestamp={msg.timestamp}
                isRecent={index === messages.length - 1 && msg.sender === 'bot'}
              />
            ))}

            {/* WhatsApp Typing Indicator */}
            {isTyping && <TypingIndicator />}

            {/* INTERACTIVE CARDS (WhatsApp Template Interactive Messages) */}

            {/* Plan Selector */}
            {currentStep === 'PLAN_SELECTION' && !isTyping && (
              <PlanSelector
                onSelectPlan={handleSelectPlan}
                selectedPlanId={selectedPlan?.id}
              />
            )}

            {/* Device Selector */}
            {currentStep === 'DEVICE_SELECTION' && !isTyping && (
              <DeviceSelector
                onConfirmDevice={handleConfirmDevice}
                selectedCategory={device.category}
                selectedDetail={device.detail}
              />
            )}

            {/* App Instructions */}
            {currentStep === 'APP_INSTRUCTIONS' && !isTyping && (
              <DeviceInstructions
                device={device}
                customerName={customer.name.split(' ')[0]}
                onConfirmInstallation={handleConfirmInstallation}
              />
            )}

            {/* Order Review */}
            {currentStep === 'REVIEW' && !isTyping && (
              <OrderReview
                order={currentOrder}
                onEdit={() => {
                  setCurrentStep('ASK_EMAIL');
                  setCurrentInputValue(customer.email || '');
                  setInputError('');
                  addBotMessage('Sem problemas! Vamos revisar seus dados. Qual é o seu e-mail correto?');
                }}
                onProceedToPayment={handleProceedToPayment}
              />
            )}

            {/* Payment Step */}
            {currentStep === 'PAYMENT' && !isTyping && (
              <PaymentStep
                order={currentOrder}
                paymentStatus={paymentStatus}
                onSimulateStatus={handleSimulatePaymentStatus}
              />
            )}

            {/* Payment Confirmed */}
            {currentStep === 'PAYMENT_CONFIRMED' && !isTyping && (
              <PaymentSuccess order={currentOrder} />
            )}

            <div ref={chatEndRef} />
          </div>
        )}
      </main>

      {/* WhatsApp Fixed Bottom Message Composer */}
      {currentStep !== 'WELCOME' && isInputStep && !isTyping && (
        <ChatInputBar
          kind={inputConfig.kind}
          placeholder={inputConfig.placeholder}
          value={currentInputValue}
          error={inputError}
          onChange={val => {
            setCurrentInputValue(val);
            if (inputError) setInputError('');
          }}
          onSubmit={inputConfig.onSubmit}
        />
      )}

      {/* Floating Developer Debug Panel */}
      <DebugPanel
        currentStep={currentStep}
        order={currentOrder}
        onJumpStep={step => setCurrentStep(step)}
        onFillMockData={handleFillMockData}
        onSimulatePaid={() => handleSimulatePaymentStatus('paid')}
        onReset={handleResetSession}
      />
    </div>
  );
};

export default BotPage;
