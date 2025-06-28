export interface InstitutionUser {
  id: string;
  name: string;
  address: string;
  code: string;
  phone: string;
  openingHours: string;
  email: string;
  status: "ACTIVE" | "INACTIVE" | string;
  rating: number;
  type: "SCHOOL" | "INSTITUTION" | string;
  createdAt: string;
  updatedAt: string;
  plan: string;
  limitations: Record<string, unknown>;
  purchaseStatus: "ACTIVE" | "INACTIVE" | string;
  expirationDate: string;
}
