import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPosts(): Promise<import(".prisma/client").Post[]>;
    get(userId: number): Promise<import(".prisma/client").Post[]>;
    getById(userId: any, postId: any): Promise<import(".prisma/client").Post>;
    create(userId: number, dto: CreatePostDto): Promise<import(".prisma/client").Post>;
    update(userId: number, postId: any, dto: UpdatePostDto): Promise<import(".prisma/client").Post>;
    remove(userId: number, postId: number): Promise<string>;
}
