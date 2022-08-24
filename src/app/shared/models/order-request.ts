export interface OrderRequest {
  name: string;
  description: string;
  requestedAt: string; // must use toISOString()
  currency: 'USD' | 'KHR';
  groupId: number;
}
