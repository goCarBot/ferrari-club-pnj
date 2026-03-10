export interface GalleryImage {
  sourceUrl: string;
  filename: string;
  alt: string;
}

export interface GalleryEvent {
  title: string;
  date: string;
  slug: string;
  eventUrl: string;
  images: GalleryImage[];
}

export interface ContactInfo {
  name: string;
  email: string | null;
  phone: string | null;
  sourceUrl: string | null;
}

export interface Sponsor {
  name: string;
  priorityOrder: number;
  logoUrl: string;
  websiteUrl: string | null;
  contactInfo: ContactInfo | null;
  description: string | null;
}

export interface ScheduleItem {
  time: string;
  title: string;
  details: string[];
}

export interface EventData {
  name: string;
  date: string;
  venue: string;
  address: string;
  contact: ContactInfo;
  schedule: ScheduleItem[];
  highlights: string[];
  judgingNote: string;
  registrationUrlToken: string;
  positioningCopy: string;
}
