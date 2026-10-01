export type ProductCategory = 'bestsellers' | 'patches' | 'lipcare' | 'cleanser' | 'bundles';

export interface Category {
  id: ProductCategory;
  label: string;
  labelKo: string;
}

export interface Product {
  id: string;
  titleKo: string;
  titleEn?: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number; // KRW
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string; // e.g. "무료배송", "올리브영 1위", "베스트"
  tagline: string;
  description: string;
  accentColor: string;
  cardBg: string;
  illustrationType: 'matcha-patch' | 'lip-balm' | 'cleansing-bar' | 'super-bundle' | 'tea-mist';
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
