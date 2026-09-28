export interface PosterItem {
  id: string;
  title: string;
  image: string;
  category: 'cinema' | 'series' | 'kids' | 'action' | 'trending';
  categoryLabel: string;
  rating: string;
  year: string;
  quality: '4K UHD' | 'FULL HD';
  duration?: string;
  badge?: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceFormatted: string;
  period: string;
  monthlyEquivalent?: string;
  savingsBadge?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaSubtext?: string;
  accentGlow?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  handle: string;
  device: string;
  location: string;
  stars: number;
  text: string;
  date: string;
  verified: boolean;
  isPlaceholder?: boolean;
}

export interface DeviceSpec {
  id: string;
  name: string;
  icon: string;
  badge: string;
  description: string;
  features: string[];
  mockupAspect: 'tv' | 'mobile' | 'tablet' | 'desktop';
}
