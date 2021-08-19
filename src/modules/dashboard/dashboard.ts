export interface Dashboard {
    lastUser: {
        createdAt: Date;
        email: string;
    },
    totalUsers?: number;
}
