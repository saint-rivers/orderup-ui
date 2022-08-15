export interface OrderRequest {
  name: string | null | undefined;
  description: string | null | undefined;
  requestedAt: string; // must use toISOString()
  currency: 'USD' | 'KHR';
}
