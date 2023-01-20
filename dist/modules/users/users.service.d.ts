import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    get(userId: any): Promise<import(".prisma/client").User>;
    update(userId: any, dto: any): Promise<import(".prisma/client").User>;
}
