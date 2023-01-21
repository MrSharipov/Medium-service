import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    get(userId: number): Promise<import(".prisma/client").Post[]>;
    getById(userId: any, postId: any): Promise<import(".prisma/client").Post>;
    create(userId: number, dto: CreatePostDto): Promise<import(".prisma/client").Post>;
    saveReadTime(postId: any, time: any): Promise<import(".prisma/client").ReadTime>;
    update(userId: number, postId: any, dto: UpdatePostDto): Promise<import(".prisma/client").Post>;
    remove(userId: number, postId: number): Promise<string>;
}
