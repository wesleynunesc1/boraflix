import { DeviceSpec } from '../types';

export const devicesList: DeviceSpec[] = [
  {
    id: 'tv',
    name: 'Smart TVs',
    icon: 'Tv',
    badge: '4K Ultra HD • HDR10',
    description: 'Experiência imersiva de cinema na tela grande da sua sala com navegação suave pelo controle remoto.',
    features: ['Samsung (Tizen 2017+)', 'LG (webOS 3.0+)', 'Android TV & Google TV', 'Apple TV & Roku OS'],
    mockupAspect: 'tv'
  },
  {
    id: 'tvbox',
    name: 'TV Box & Sticks',
    icon: 'Radio',
    badge: 'Plug & Play • Alto Desempenho',
    description: 'Transforme qualquer TV em uma central de streaming 4K moderna com resposta instantânea aos comandos.',
    features: ['Amazon Fire TV Stick', 'Xiaomi Mi Box / Stick', 'Chromecast com Google TV', 'Aparelhos TV Box Android'],
    mockupAspect: 'tv'
  },
  {
    id: 'mobile',
    name: 'Smartphones',
    icon: 'Smartphone',
    badge: 'Assista Onde Quiser • 60 FPS',
    description: 'Leve todo o entretenimento no bolso. Otimizado para conexões 4G/5G com consumo reduzido de dados móveis.',
    features: ['iPhone (iOS 14+)', 'Smartphones Android', 'Modo Picture-in-Picture', 'Download para offline (em breve)'],
    mockupAspect: 'mobile'
  },
  {
    id: 'tablet',
    name: 'Tablets & iPads',
    icon: 'Tablet',
    badge: 'Portabilidade • Tela Sensível',
    description: 'Ideal para viagens, cama ou crianças. Interface adaptada com suporte a toques e reprodução em segundo plano.',
    features: ['iPadOS (Apple)', 'Samsung Galaxy Tab', 'Lenovo Tab & outros Android', 'Perfis infantis dedicados'],
    mockupAspect: 'tablet'
  },
  {
    id: 'desktop',
    name: 'Computadores & Web',
    icon: 'Laptop',
    badge: 'Multi-Janela • Atalhos de Teclado',
    description: 'Assista diretamente no navegador web sem precisar instalar nada, ou utilize nosso aplicativo dedicado para PC.',
    features: ['Windows 10 e 11', 'macOS (Safari / Chrome)', 'Google Chrome, Edge, Firefox', 'Modo Janela Flutuante'],
    mockupAspect: 'desktop'
  }
];
