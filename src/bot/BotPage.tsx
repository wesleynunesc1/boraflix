import React, { useState, useEffect, useRef } from 'react';
import { BotHeader } from './components/BotHeader';
import { ChatMessage } from './components/ChatMessage';
import { TypingIndicator } from './components/TypingIndicator';
import { PlanSelector } from './components/PlanSelector';
import { DeviceSelector } from './components/DeviceSelector';
import { DeviceInstructions } from './components/DeviceInstructions';
import { DataCollection } from './components/DataCollection';
import { OrderReview } from './components/OrderReview';
import { PaymentStep } from './components/PaymentStep';
import { PaymentSuccess } from './components/PaymentSuccess';
import { DebugPanel } from './components/DebugPanel';
import { BotStep, BotOrder, ChatMessageItem, CustomerData, DeviceInfo, PaymentStatus } from './types/bot';
import { PricingPlan } from '../types';
import { generateOrderId } from './config/botConfig';
import { saveBotSession, loadBotSession, clearBotSession } from './services/sessionService';
import { Sparkles, ArrowRight, ShieldCheck, Play } from 'lucide-react';

interface BotPageProps {
  onBackToSite: () => void;
}

export const BotPage: React.FC<BotPageProps> = ({ onBackToSite }) => {
  // Initialize state from safe session storage if available
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
  const [nameInputValue, setNameInputValue] = useState<string>('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat smoothly
  const scrollToBottom = () => {
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, currentStep]);

  // Persist non-sensitive session progress
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

  // Helper to append a bot message with simulated typing delay
  const addBotMessage = (text: string, delay = 500) => {
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

  // STEP 1 -> STEP 2: START ONBOARDING
  const handleStartOnboarding = () => {
    setCurrentStep('PLAN_SELECTION');
    addBotMessage('Olá! 👋 Bem-vindo ao atendimento interativo do BoraFlix!\n\nVou te guiar na escolha do plano, na preparação do seu aparelho e na liberação do seu acesso em até 4 telas simultâneas.\n\nPara começar, qual destes planos melhor atende você?');
  };

  // STEP 2 -> STEP 3: PLAN CHOSEN
  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    addUserMessage(`Escolhi o Plano ${plan.name} (${plan.priceFormatted}${plan.period}).`);

    setCurrentStep('ASK_NAME');
    addBotMessage(
      `Excelente escolha! 🍿 O Plano ${plan.name} (${plan.priceFormatted}) libera acesso total a mais de 60.000 títulos e canais em 4K HDR.\n\nPara personalizarmos seu atendimento, como posso te chamar?`
    );
  };

  // STEP 3 -> STEP 4: NAME CONFIRMED
  const handleConfirmName = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = nameInputValue.trim();
    if (!cleanName) return;

    setCustomer(prev => ({ ...prev, name: cleanName }));
    addUserMessage(`Pode me chamar de ${cleanName}.`);
    setNameInputValue('');

    setCurrentStep('DEVICE_SELECTION');
    addBotMessage(
      `Prazer, ${cleanName}! 😄\n\nAgora me conta: em qual dispositivo você pretende assistir ao BoraFlix com mais frequência?`
    );
  };

  // STEP 4 -> STEP 5: DEVICE CONFIRMED
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
      `Perfeito, ${customer.name.split(' ')[0] || 'amigo(a)'}! 📺\n\nComo você vai utilizar ${detail.label}, preparei as orientações ideais para deixar seu aparelho pronto para a ativação imediata.`
    );
  };

  // STEP 5 -> STEP 6: APP INSTALLATION CONFIRMED
  const handleConfirmInstallation = (installed: boolean) => {
    setDevice(prev => ({ ...prev, installed }));

    if (installed) {
      addUserMessage('Sim, já instalei o aplicativo no meu aparelho!');
    } else {
      addUserMessage('Ainda não consegui, vou precisar do auxílio do suporte no WhatsApp.');
    }

    setCurrentStep('PERSONAL_DATA');
    addBotMessage(
      'Ótimo! Seu aparelho já está cadastrado no sistema. ✅\n\nDepois da confirmação do pagamento, nossa equipe vai preparar os dados necessários para ativar seu acesso.\n\nNo final deste atendimento você será encaminhado ao nosso WhatsApp com todas as informações organizadas. Preencha seus dados de titular:'
    );
  };

  // STEP 6 -> STEP 7: CUSTOMER DATA SUBMITTED
  const handleSubmitData = (data: CustomerData) => {
    setCustomer(data);
    addUserMessage('Dados preenchidos e confirmados.');

    setCurrentStep('REVIEW');
    addBotMessage(
      'Tudo quase pronto! Confira o resumo do seu pedido abaixo para garantirmos que todas as informações estão corretas 👇'
    );
  };

  // STEP 7 -> STEP 8: PROCEED TO PAYMENT
  const handleProceedToPayment = () => {
    addUserMessage('Conferi o resumo. Quero prosseguir para o pagamento.');
    setCurrentStep('PAYMENT');
    setPaymentStatus('pending');
    addBotMessage(
      `Perfeito! Geramos o PIX do seu pedido (${orderId}).\n\nVocê pode pagar escaneando o QR Code ou copiando o código PIX. Como estamos em modo de demonstração, você também pode usar os botões de simulação abaixo para testar o fluxo.`
    );
  };

  // STEP 8 -> STEP 9: SIMULATE PAYMENT STATUS
  const handleSimulatePaymentStatus = (status: PaymentStatus) => {
    setPaymentStatus(status);
    if (status === 'paid') {
      setCurrentStep('PAYMENT_CONFIRMED');
      addBotMessage(
        `✓ Pagamento confirmado com sucesso! 🎉\n\nSeu pedido ${orderId} foi validado no sistema e está tudo preparado. Clique no botão "RECEBER MEU ACESSO" abaixo para iniciar a ativação imediata no WhatsApp oficial com nossa equipe!`
      );
    }
  };

  // RESET FLOW
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
    setNameInputValue('');
  };

  // Quick dev fill
  const handleFillMockData = () => {
    setCustomer({
      name: 'João da Silva Santos (Teste)',
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
        id: 'trimestral',
        name: 'Trimestral',
        priceFormatted: 'R$ 75,00',
        priceNumber: '75,00',
        period: '/trimestre',
        description: 'Plano Trimestral',
        features: ['Acesso a +60.000 títulos', '4 telas em 4K'],
        ctaText: 'ASSINAR TRIMESTRAL',
        whatsappMessage: 'Olá! Vim pelo site...',
      });
    }
  };

  const currentOrder: BotOrder = {
    orderId,
    planId: selectedPlan?.id || 'mensal',
    planName: selectedPlan?.name || 'Mensal',
    planPrice: selectedPlan?.priceFormatted || 'R$ 30,00',
    planPeriod: selectedPlan?.period || '/mês',
    device,
    customer,
    paymentStatus,
    createdAt: new Date().toISOString(),
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-x-clip">
      {/* Background Ambience */}
      <div
        className="ambient-glow ambient-purple fixed pointer-events-none"
        style={{ top: '10%', left: '50%', width: 'min(600px, 80vw)', height: '400px', transform: 'translateX(-50%)', opacity: 0.25 }}
      />
      <div
        className="ambient-glow ambient-cyan fixed pointer-events-none"
        style={{ bottom: '5%', right: '5%', width: 'min(400px, 60vw)', height: '350px', opacity: 0.2 }}
      />

      {/* Header */}
      <BotHeader
        currentStep={currentStep}
        orderId={orderId}
        onReset={handleResetSession}
        onBackToSite={onBackToSite}
      />

      {/* Main Chat & Interactive Canvas Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 flex flex-col justify-start z-10">
        {/* STEP 1: WELCOME ONBOARDING HERO CARD */}
        {currentStep === 'WELCOME' && (
          <div className="my-auto py-8 sm:py-12 text-center animate-fadeIn max-w-lg mx-auto">
            {/* 3D Brand Logo Ribbon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 rounded-3xl bg-gradient-to-tr from-purple-600/30 to-pink-500/30 border border-pink-500/30 p-3 shadow-[0_0_40px_rgba(255,0,127,0.35)] flex items-center justify-center animate-pulse">
              <img
                src="/assets/logos/boraflix-icon.png"
                alt="BoraFlix Símbolo B"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3 tracking-wide">
              <Sparkles size={13} />
              <span>Atendimento e Checkout Conversacional</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Olá! 👋 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400">
                Vamos preparar seu acesso?
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-md mx-auto">
              Vou te ajudar a escolher seu plano, verificar seu aparelho e deixar tudo pronto para sua liberação imediata.
            </p>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={handleStartOnboarding}
                className="w-full sm:w-auto min-w-[240px] py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-600 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-pink-500/30 transition-all active:scale-95 mx-auto group"
              >
                <span>COMEÇAR ATENDIMENTO</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-slate-400 font-medium">
                ⚡ Leva apenas alguns minutos • Sem contratos longos
              </p>
            </div>
          </div>
        )}

        {/* STEP 2+: CONVERSATIONAL MESSAGE FEED */}
        {currentStep !== 'WELCOME' && (
          <div className="space-y-3 w-full">
            {messages.map(msg => (
              <ChatMessage
                key={msg.id}
                sender={msg.sender}
                text={msg.text}
                timestamp={msg.timestamp}
              />
            ))}

            {isTyping && <TypingIndicator />}

            {/* STEP 2: PLAN SELECTOR COMPONENT */}
            {currentStep === 'PLAN_SELECTION' && !isTyping && (
              <PlanSelector
                onSelectPlan={handleSelectPlan}
                selectedPlanId={selectedPlan?.id}
              />
            )}

            {/* STEP 3: NAME INPUT FORM */}
            {currentStep === 'ASK_NAME' && !isTyping && (
              <form
                onSubmit={handleConfirmName}
                className="max-w-md mx-auto my-4 p-4 rounded-2xl bg-[#0e1424] border border-cyan-500/30 shadow-xl flex gap-2 animate-fadeIn"
              >
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="Digite como podemos te chamar..."
                  value={nameInputValue}
                  onChange={e => setNameInputValue(e.target.value)}
                  className="flex-1 py-2.5 px-3.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1 active:scale-95 shadow-md shadow-pink-500/20"
                >
                  <span>Confirmar</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}

            {/* STEP 4: DEVICE SELECTOR */}
            {currentStep === 'DEVICE_SELECTION' && !isTyping && (
              <DeviceSelector
                onConfirmDevice={handleConfirmDevice}
                selectedCategory={device.category}
                selectedDetail={device.detail}
              />
            )}

            {/* STEP 5: APP INSTRUCTIONS */}
            {currentStep === 'APP_INSTRUCTIONS' && !isTyping && (
              <DeviceInstructions
                device={device}
                customerName={customer.name.split(' ')[0]}
                onConfirmInstallation={handleConfirmInstallation}
              />
            )}

            {/* STEP 6: PERSONAL DATA COLLECTION FORM */}
            {currentStep === 'PERSONAL_DATA' && !isTyping && (
              <DataCollection
                initialData={customer}
                onSubmitData={handleSubmitData}
              />
            )}

            {/* STEP 7: ORDER REVIEW SUMMARY */}
            {currentStep === 'REVIEW' && !isTyping && (
              <OrderReview
                order={currentOrder}
                onEdit={() => setCurrentStep('PERSONAL_DATA')}
                onProceedToPayment={handleProceedToPayment}
              />
            )}

            {/* STEP 8: MOCK PAYMENT PROVIDER */}
            {currentStep === 'PAYMENT' && !isTyping && (
              <PaymentStep
                order={currentOrder}
                paymentStatus={paymentStatus}
                onSimulateStatus={handleSimulatePaymentStatus}
              />
            )}

            {/* STEP 9: PAYMENT CONFIRMED / WHATSAPP HANDOFF */}
            {currentStep === 'PAYMENT_CONFIRMED' && !isTyping && (
              <PaymentSuccess order={currentOrder} />
            )}

            <div ref={chatEndRef} />
          </div>
        )}
      </main>

      {/* Floating Dev/Test Debug Panel */}
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
