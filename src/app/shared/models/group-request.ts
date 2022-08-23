export interface GroupRequest {
    name: string,
    createdAt: string, // new Date.toISOString()
    imageUrl: string,
    users: string[] // 
}

