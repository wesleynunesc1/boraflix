export const WHATSAPP_BOT_NUMBER = '558594480239';

export interface DeviceCategoryOption {
  id: string;
  label: string;
  icon: string;
  subOptions: { id: string; label: string }[];
}

export const DEVICE_CATEGORIES: DeviceCategoryOption[] = [
  {
    id: 'smart_tv',
    label: 'Smart TV',
    icon: '📺',
    subOptions: [
      { id: 'samsung', label: 'Samsung (Tizen)' },
      { id: 'lg', label: 'LG (webOS)' },
      { id: 'android_tv', label: 'Android TV / Google TV' },
      { id: 'tcl', label: 'TCL Smart TV' },
      { id: 'philips', label: 'Philips Smart TV' },
      { id: 'aoc', label: 'AOC Smart TV' },
      { id: 'hisense', label: 'Hisense (VIDAA)' },
      { id: 'other_tv', label: 'Outra marca de Smart TV' },
    ],
  },
  {
    id: 'fire_tv',
    label: 'Fire TV Stick',
    icon: '🔥',
    subOptions: [
      { id: 'fire_4k', label: 'Fire TV Stick 4K' },
      { id: 'fire_lite', label: 'Fire TV Stick Lite' },
      { id: 'fire_hd', label: 'Fire TV Stick HD / Básico' },
      { id: 'fire_other', label: 'Outro modelo Fire TV' },
    ],
  },
  {
    id: 'tv_box',
    label: 'TV Box',
    icon: '📦',
    subOptions: [
      { id: 'box_android', label: 'Android TV Box (Padrão)' },
      { id: 'box_xiaomi', label: 'Xiaomi Mi Box / Stick' },
      { id: 'box_aquario', label: 'Aquário / Intelbras' },
      { id: 'box_apple_tv', label: 'Apple TV (tvOS)' },
      { id: 'box_other', label: 'Outro modelo de TV Box' },
    ],
  },
  {
    id: 'android',
    label: 'Android (Celular / Tablet)',
    icon: '📱',
    subOptions: [
      { id: 'android_smartphone', label: 'Smartphone Android' },
      { id: 'android_tablet', label: 'Tablet Android' },
    ],
  },
  {
    id: 'ios',
    label: 'iPhone / iPad (iOS)',
    icon: '🍎',
    subOptions: [
      { id: 'ios_iphone', label: 'iPhone (iOS)' },
      { id: 'ios_ipad', label: 'iPad (iPadOS)' },
    ],
  },
  {
    id: 'pc',
    label: 'Computador / Notebook',
    icon: '💻',
    subOptions: [
      { id: 'pc_windows', label: 'Windows (PC / Notebook)' },
      { id: 'pc_macos', label: 'macOS (MacBook / iMac)' },
      { id: 'pc_web', label: 'Navegador Web / Linux' },
    ],
  },
  {
    id: 'other',
    label: 'Outro Dispositivo',
    icon: '🌐',
    subOptions: [
      { id: 'other_device', label: 'Outro sistema ou aparelho' },
    ],
  },
];

export interface DeviceInstructionConfig {
  appName: string;
  appDescription: string;
  steps: string[];
  tips: string;
}

/**
 * Centralized instructions per device / brand.
 * Placeholder values clearly indicated with [CONFIGURAR].
 */
export const DEVICE_INSTRUCTIONS: Record<string, DeviceInstructionConfig> = {
  samsung: {
    appName: '[CONFIGURAR: Aplicativo para Samsung Tizen]',
    appDescription: 'Disponível na Samsung Smart Hub / App Store da sua TV.',
    steps: [
      'Ligue sua Smart TV Samsung e pressione o botão Home no controle remoto.',
      'Acesse a loja de aplicativos (Ícone "Apps").',
      'Pesquise pelo aplicativo recomendado indicado acima.',
      'Clique em "Instalar" ou "Download" e aguarde a conclusão.',
    ],
    tips: 'Mantenha sua TV conectada à rede Wi-Fi ou cabo de rede para garantir transmissão 4K fluida.',
  },
  lg: {
    appName: '[CONFIGURAR: Aplicativo para LG webOS]',
    appDescription: 'Disponível na LG Content Store.',
    steps: [
      'Pressione o botão Home no controle remoto da sua LG.',
      'Abra a loja "LG Content Store" (ou "Apps").',
      'Na busca (lupa), digite o nome do aplicativo recomendado acima.',
      'Selecione o app e clique em "Instalar".',
    ],
    tips: 'Compatível com modelos LG webOS 3.0 ou superior.',
  },
  android_tv: {
    appName: '[CONFIGURAR: Aplicativo para Android TV]',
    appDescription: 'Disponível diretamente na Google Play Store da TV.',
    steps: [
      'Abra a Google Play Store na sua TV ou dispositivo Google TV.',
      'Busque pelo aplicativo recomendado.',
      'Selecione "Instalar" e aguarde o download.',
    ],
    tips: 'Você pode pesquisar usando a busca por voz no controle remoto.',
  },
  fire_tv: {
    appName: '[CONFIGURAR: Aplicativo para Amazon Fire TV]',
    appDescription: 'Disponível na Amazon Appstore do Fire Stick.',
    steps: [
      'No menu inicial do Fire TV, vá até a lupa "Pesquisar".',
      'Procure pelo aplicativo recomendado ou use o app Downloader.',
      'Faça o download gratuito e clique em "Abrir".',
    ],
    tips: 'Caso utilize o Downloader, certifique-se de habilitar apps de fontes desconhecidas nas configurações.',
  },
  tv_box: {
    appName: '[CONFIGURAR: Aplicativo para TV Box Android]',
    appDescription: 'Compatível com Android TV Box e players homologados.',
    steps: [
      'Acesse a Play Store ou o navegador da sua TV Box.',
      'Instale o aplicativo player recomendado para o seu modelo.',
      'Abra o aplicativo e deixe-o pronto para receber suas credenciais.',
    ],
    tips: 'Recomendamos usar conexão via cabo de rede para máxima estabilidade.',
  },
  android: {
    appName: '[CONFIGURAR: Aplicativo para Android Mobile]',
    appDescription: 'Disponível na Google Play Store ou APK direto.',
    steps: [
      'Abra a Google Play Store no seu smartphone ou tablet.',
      'Procure pelo aplicativo player oficial.',
      'Clique em "Instalar" e conceda as permissões de reprodução.',
    ],
    tips: 'Assista de qualquer lugar conectado no 4G/5G ou Wi-Fi.',
  },
  ios: {
    appName: '[CONFIGURAR: Aplicativo para iPhone e iPad]',
    appDescription: 'Disponível na Apple App Store oficial.',
    steps: [
      'Abra a App Store no seu iPhone ou iPad.',
      'Pesquise pelo player recomendado compatível com iOS.',
      'Toque em "Obter" e confirme com Face ID ou Touch ID.',
    ],
    tips: 'Compatível com AirPlay para transmitir direto para sua TV.',
  },
  pc: {
    appName: '[CONFIGURAR: Player Web / Aplicativo PC]',
    appDescription: 'Acesse pelo navegador web ou software dedicado.',
    steps: [
      'Abra seu navegador preferido (Chrome, Edge ou Firefox).',
      'Acesse o portal de streaming do BoraFlix (link fornecido após a ativação).',
      'Ou instale o software reprodutor para desktop.',
    ],
    tips: 'Qualidade Full HD e 4K HDR suportada nos navegadores modernos.',
  },
  default: {
    appName: '[CONFIGURAR: Aplicativo Padrão BoraFlix]',
    appDescription: 'Instruções personalizadas fornecidas pelo suporte.',
    steps: [
      'Acesse a loja oficial do seu dispositivo.',
      'Instale o aplicativo reprodutor indicado pela nossa equipe.',
      'Após a instalação, nosso suporte humano enviará seu login e senha.',
    ],
    tips: 'Nosso suporte via WhatsApp acompanha sua configuração passo a passo se precisar de ajuda.',
  },
};

/**
 * Returns instructions matching device detail or fallback to category/default.
 */
export function getDeviceInstructions(category: string, detailId: string): DeviceInstructionConfig {
  if (DEVICE_INSTRUCTIONS[detailId]) {
    return DEVICE_INSTRUCTIONS[detailId];
  }
  if (DEVICE_INSTRUCTIONS[category]) {
    return DEVICE_INSTRUCTIONS[category];
  }
  return DEVICE_INSTRUCTIONS.default;
}

/**
 * Generate human-friendly random session/order identifier (e.g. BF-8K2P4X)
 */
export function generateOrderId(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let result = 'BF-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Partially masks CPF for privacy (e.g. 123.***.***-45)
 */
export function maskCpf(cpf: string): string {
  const digits = cpf.replace(/\D/g, '');
  if (digits.length < 11) return '***.***.***-**';
  return `${digits.slice(0, 3)}.***.***-${digits.slice(9, 11)}`;
}

/**
 * Formats a raw string to Brazilian CPF mask: 000.000.000-00
 */
export function formatCpfInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

/**
 * Formats a raw string to Brazilian phone mask: (00) 00000-0000
 */
export function formatPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/**
 * Builds the final qualified WhatsApp message for human handoff
 */
export function buildFinalWhatsAppMessage(order: {
  orderId: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  planName: string;
  planPrice: string;
  deviceLabel: string;
  deviceDetail: string;
  appName: string;
  installed: boolean | null;
}): string {
  const installedText = order.installed === true ? 'Sim, já instalado' : 'Precisa de auxílio';
  const maskedCpf = maskCpf(order.cpf);

  return `Olá! 👋 Acabei de concluir meu atendimento pelo BoraFlix e meu pagamento foi confirmado.

🎟️ SOLICITAÇÃO DE ATIVAÇÃO
👤 Nome: ${order.name}
📧 E-mail: ${order.email}
📱 WhatsApp: ${order.phone}
🪪 CPF: ${maskedCpf}
📦 Plano: ${order.planName}
💰 Valor: ${order.planPrice}
📺 Dispositivo: ${order.deviceLabel}
🏷️ Marca/Sistema: ${order.deviceDetail}
📱 Aplicativo: ${order.appName}
✅ Aplicativo instalado: ${installedText}
💳 Pagamento: Confirmado (Simulação de Teste)
🧾 ID do pedido: ${order.orderId}

Já realizei as etapas de configuração e gostaria de receber meu acesso. ✅`;
}
