// TypeScript types for Cappadocia Run Club

export interface FormData {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  isActiveRunner: 'yes' | 'no';
  locations: string[]; // 'caddebostan' | 'macka'
  consentGiven: boolean;
}

export interface StravaStats {
  runs: number;
  distance: string;
  duration: string;
  elevation: string;
}
