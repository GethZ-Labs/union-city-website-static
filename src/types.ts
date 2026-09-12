export interface OngoingProject {
  id: string;
  name: string;
  location: string;
  pricePerPerch: string;
  image: string;
  fbImage?: string;
  link?: string;
  amenities?: string[];
}

export interface ComingSoonProject {
  id: string;
  location: string;
  note?: string;
}

export interface SoldOutProject {
  id: string;
  name: string;
  location: string;
  highlights: string;
  image: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  status: 'unread' | 'read';
}

export interface CareerApplication {
  id: string;
  position: string;
  name: string;
  email: string;
  phone?: string;
  resumeFileName?: string;
  message?: string;
  date: string;
  status: 'new' | 'reviewed';
}

export type ActivePage = 'home' | 'lands' | 'about' | 'careers' | 'contact' | 'admin';
export type AppTheme = 'green' | 'blue';
