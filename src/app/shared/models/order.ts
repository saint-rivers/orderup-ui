export interface Order {
  id: string;
  name: string;
  description?: string;
  requestedItems: [];
  createdAt: Date;
  grandTotal: number;
  currency: string;
}
