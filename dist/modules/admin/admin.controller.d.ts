import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAll(userRole: any): Promise<{
        allUsers: import(".prisma/client").User[];
        allPosts: import(".prisma/client").Post[];
    }>;
    getUsersByPagination(userRole: any, take: any): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    removeUserById(id: any, userRole: any): Promise<string>;
    getPostsByPagination(userRole: any, take: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    removePostById(id: any, userRole: any): Promise<string>;
}
