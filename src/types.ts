export type SoftwareType = 'defensive' | 'attack' | 'other';
export type SoftwareStatus = 'request' | 'approved';

export interface Software {
  id: string;
  name: string;
  vendor: string;
  versions: string[];
  type: SoftwareType;
  status: SoftwareStatus;
  createdAt: string;
}