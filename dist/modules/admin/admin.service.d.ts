import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(role: any): Promise<{
        allUsers: import(".prisma/client").User[];
        allPosts: import(".prisma/client").Post[];
    }>;
    getUsersByPagination(role: any, take: any): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    getPostsByPagination(role: any, take: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    removeUser(userRole: any, id: any): Promise<string>;
    removePost(userRole: any, id: any): Promise<string>;
}
