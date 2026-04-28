export interface FeatureItem {
  id: string;
  icon: string;
  name: string;
  nameEn: string;
  description: string;
  decorationImage?: string;
}

export interface Metric {
  value: string;
  label: string;
}
