export interface Group {
  id: string;
  name: string;
  createdAt: string; // new Date.toISOString()
  imageUrl: string;
  members: any[]; //
  createdBy: any;
}
