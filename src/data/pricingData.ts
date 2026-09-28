import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    priceFormatted: 'R$ 14,90',
    period: '/mês',
    monthlyEquivalent: 'Cobrado mensalmente',
    description: 'A flexibilidade ideal para experimentar o entretenimento premium sem compromisso.',
    features: [
      'Acesso ilimitado a +60.000 títulos',
      'Canais ao vivo em Full HD e 4K',
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
    name: 'Plano Trimestral',
    badge: 'MAIS ESCOLHIDO',
    isPopular: true,
    accentGlow: true,
    priceFormatted: 'R$ 34,90',
    period: '/trimestre',
    monthlyEquivalent: 'Equivale a apenas R$ 11,63/mês',
    savingsBadge: 'Economia de 22%',
    description: 'O equilíbrio perfeito entre máxima economia e diversão contínua para toda a família.',
    features: [
      'Tudo do Plano Mensal incluído',
      'Prioridade de banda em servidores CDN',
      'Acesso antecipado a lançamentos de cinema',
      'Configuração assistida via suporte VIP',
      'Até 4 telas simultâneas em 4K HDR',
      'Ativação prioritária automática',
      'Garantia incondicional de satisfação'
    ],
    ctaText: 'ESCOLHER TRIMESTRAL',
    ctaSubtext: 'Melhor custo-benefício • Acesso imediato'
  },
  {
    id: 'semestral',
    name: 'Plano Semestral',
    badge: 'MÁXIMA ECONOMIA',
    priceFormatted: 'R$ 59,90',
    period: '/semestre',
    monthlyEquivalent: 'Equivale a apenas R$ 9,98/mês',
    savingsBadge: 'Economia de 33%',
    description: '6 meses de entretenimento sem interrupções com o menor valor por mês da plataforma.',
    features: [
      'Tudo do Plano Trimestral incluído',
      'Acesso VIP 24h sem filas no atendimento',
      'Canal exclusivo para pedidos de conteúdo',
      '4 telas simultâneas com qualidade 4K UHD',
      'Backup de servidores anti-quedas',
      'Guia rápido de otimização de velocidade',
      'Economia máxima comprovada'
    ],
    ctaText: 'ESCOLHER SEMESTRAL',
    ctaSubtext: 'Pagamento único para 6 meses completos'
  }
];
