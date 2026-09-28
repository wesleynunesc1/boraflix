import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    priceFormatted: 'R$ 30,00',
    priceNumber: '30,00',
    period: '/mês',
    monthlyEquivalent: 'Cobrado mensalmente',
    monthlyNumber: '30,00',
    description: 'A flexibilidade ideal para experimentar o entretenimento premium sem compromisso.',
    features: [
      'Acesso ilimitado a +60.000 títulos',
      'Canais ao vivo em Full HD e 4K HDR',
      'Guia de programação EPG em tempo real',
      'Até 4 telas simultâneas liberadas',
      'Compatível com Smart TV, Celular e PC',
      'Suporte técnico via WhatsApp',
      'Sem fidelidade ou taxa de cancelamento'
    ],
    ctaText: 'ESCOLHER MENSAL',
    ctaSubtext: 'Ativação imediata após confirmação'
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
    totalSavings: 'Economize R$ 15 no trimestre',
    savingsBadge: 'Economia de R$ 15',
    description: 'Acesso contínuo com sua primeira economia garantida para seu entretenimento.',
    features: [
      'Tudo do Plano Mensal incluído',
      'Economia de R$ 15 em relação ao mensal',
      'Prioridade de tráfego em servidores CDN',
      'Configuração assistida via WhatsApp VIP',
      'Até 4 telas simultâneas em 4K HDR',
      'Ativação automática instantânea',
      'Garantia incondicional de satisfação'
    ],
    ctaText: 'ESCOLHER TRIMESTRAL',
    ctaSubtext: 'Melhor custo para começar • Acesso imediato'
  },
  {
    id: 'semestral',
    name: 'Semestral',
    badge: 'MAIS ESCOLHIDO',
    isPopular: true,
    accentGlow: true,
    originalPrice: 'R$ 180',
    priceFormatted: 'R$ 120,00',
    priceNumber: '120,00',
    period: '/semestre',
    monthlyEquivalent: 'Equivale a R$ 20,00/mês',
    monthlyNumber: '20,00',
    totalSavings: 'Economize R$ 60 em 6 meses',
    savingsBadge: 'Economia de R$ 60',
    description: 'O equilíbrio perfeito entre valor e período: 6 meses completos com alta economia comprovada.',
    features: [
      'Tudo do Plano Trimestral incluído',
      'Economia de R$ 60 em relação ao mensal',
      'Servidor VIP de ultra-baixa latência',
      'Canal prioritário sem filas no WhatsApp',
      '4 telas simultâneas com qualidade 4K UHD',
      'Backup de servidores anti-quedas',
      'Garantia incondicional de satisfação'
    ],
    ctaText: 'ESCOLHER SEMESTRAL',
    ctaSubtext: 'Destaque mais aprovado pelos clientes'
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
    totalSavings: 'Economize R$ 180 em 1 ano',
    savingsBadge: 'Metade do Preço',
    description: '12 meses inteiros de cinema, séries e esportes pagando apenas metade do valor mensal.',
    features: [
      'Tudo do Plano Semestral incluído',
      'Economia de R$ 180 (Pague 6 meses, ganhe 12)',
      'Apenas R$ 15,00 por mês equivalente',
      'Atendimento VIP 24h prioritário vitalício',
      '4 telas simultâneas em 4K HDR liberadas',
      'Congelamento do valor por 1 ano inteiro',
      'Máxima economia garantida'
    ],
    ctaText: 'ESCOLHER ANUAL',
    ctaSubtext: '1 ano de entretenimento completo'
  }
];
