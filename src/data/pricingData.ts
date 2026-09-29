import { PricingPlan } from '../types';

export const WHATSAPP_OFFICIAL_NUMBER = '558594480239';

export const getPlanWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_OFFICIAL_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    badge: 'SEM FIDELIDADE',
    priceFormatted: 'R$ 30,00',
    priceNumber: '30,00',
    period: '/mês',
    monthlyEquivalent: 'Cobrado mensalmente',
    monthlyNumber: '30,00',
    description: 'A flexibilidade ideal para experimentar o entretenimento premium com total liberdade.',
    features: [
      'Acesso ilimitado a +60.000 títulos',
      'Canais ao vivo em Full HD e 4K HDR',
      'Guia de programação EPG em tempo real',
      'Até 4 telas simultâneas liberadas',
      'Smart TV, TV Box, Celular e PC',
      'Suporte técnico via WhatsApp',
      'Cancele a qualquer momento sem taxas'
    ],
    ctaText: 'ASSINAR MENSAL',
    ctaSubtext: 'Ativação imediata • Sem fidelidade',
    whatsappMessage: 'Olá! 👋 Vim pelo site do BoraFlix e quero assinar o Plano Mensal de R$ 30,00. 🍿\n\nQuero começar agora. Como faço para ativar meu acesso?'
  },
  {
    id: 'trimestral',
    name: 'Trimestral',
    badge: 'PRIMEIRA ECONOMIA',
    originalPrice: 'R$ 90',
    priceFormatted: 'R$ 75,00',
    priceNumber: '75,00',
    period: '/trimestre',
    monthlyEquivalent: 'Equivale a R$ 25,00/mês',
    monthlyNumber: '25,00',
    totalSavings: 'Economize R$ 15',
    savingsBadge: 'Economia de R$ 15',
    description: 'Acesso contínuo com sua primeira economia garantida para curtir com a família toda.',
    features: [
      'Tudo do Plano Mensal incluído',
      'Economia de R$ 15 no trimestre',
      'Prioridade de tráfego em servidores CDN',
      'Até 4 telas simultâneas em 4K HDR',
      'Configuração assistida no WhatsApp VIP',
      'Ativação automática instantânea',
      'Garantia incondicional de 7 dias'
    ],
    ctaText: 'ASSINAR TRIMESTRAL',
    ctaSubtext: 'Melhor custo para começar • Acesso imediato',
    whatsappMessage: 'Olá! 👋 Vim pelo site do BoraFlix e escolhi o Plano Trimestral de R$ 75,00. 🍿\n\nQuero aproveitar o plano trimestral. Como faço para ativar meu acesso?'
  },
  {
    id: 'semestral',
    name: 'Semestral',
    badge: 'MAIS ESCOLHIDO • POPULAR',
    isPopular: true,
    accentGlow: true,
    originalPrice: 'R$ 180',
    priceFormatted: 'R$ 120,00',
    priceNumber: '120,00',
    period: '/semestre',
    monthlyEquivalent: 'Equivale a R$ 20,00/mês',
    monthlyNumber: '20,00',
    totalSavings: 'Economize R$ 60 (33% OFF)',
    savingsBadge: 'Economia de R$ 60',
    description: 'O equilíbrio perfeito entre valor e duração: 6 meses completos com alta economia comprovada.',
    features: [
      'Tudo do Plano Trimestral incluído',
      'Economia de R$ 60 em relação ao mensal',
      'Servidor VIP de ultra-baixa latência',
      'Atendimento prioritário sem filas no WhatsApp',
      '4 telas simultâneas com qualidade 4K UHD',
      'Backup de servidores anti-quedas',
      'Garantia incondicional de 7 dias'
    ],
    ctaText: 'ASSINAR SEMESTRAL',
    ctaSubtext: '🔥 Plano campeão de escolhas dos clientes',
    whatsappMessage: 'Olá! 👋 Vim pelo site do BoraFlix e quero assinar o Plano Semestral de R$ 120,00. 🔥🍿\n\nQuero garantir meu acesso. Como fazemos a ativação?'
  },
  {
    id: 'anual',
    name: 'Anual',
    badge: 'MÁXIMA ECONOMIA • 50% OFF',
    isBestValue: true,
    originalPrice: 'R$ 360',
    priceFormatted: 'R$ 180,00',
    priceNumber: '180,00',
    period: '/ano',
    monthlyEquivalent: 'Equivale a apenas R$ 15,00/mês',
    monthlyNumber: '15,00',
    totalSavings: 'Economize R$ 180 (Pague 6, Leve 12)',
    savingsBadge: 'Metade do Preço',
    description: '12 meses inteiros de cinema, séries e esportes pagando apenas a metade do valor mensal.',
    features: [
      'Tudo do Plano Semestral incluído',
      'Economia de R$ 180 (Metade do Preço)',
      'Apenas R$ 15,00 por mês equivalente',
      'Atendimento VIP prioritário vitalício 24h',
      '4 telas simultâneas em 4K HDR liberadas',
      'Congelamento do valor por 1 ano inteiro',
      'Garantia incondicional de 7 dias'
    ],
    ctaText: 'ASSINAR ANUAL',
    ctaSubtext: '👑 Metade do preço • Máxima economia',
    whatsappMessage: 'Olá! 👋 Vim pelo site do BoraFlix e escolhi o Plano Anual de R$ 180,00. 👑🍿\n\nQuero garantir o plano anual. Como faço para ativar meu acesso?'
  }
];

