export interface LegalService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  iconName: string;
  isFeatured?: boolean;
  category: 'court' | 'transactions' | 'property' | 'consultation' | 'specialized';
  badge?: string;
}

export interface FeaturePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LawyerInfo {
  name: string;
  nameEn: string;
  title: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  facebookUrl: string;
  location: string;
  headline: string;
  supportingText: string;
}
