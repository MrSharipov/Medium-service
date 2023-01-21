import { CreatePostDto, ReadTimeDto, UpdatePostDto } from './dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    getAll(userId: any): Promise<import(".prisma/client").Post[]>;
    getById(postId: any, userId: number): Promise<import(".prisma/client").Post>;
    create(dto: CreatePostDto, userId: number): Promise<import(".prisma/client").Post>;
    saveReadTime(postId: number, readTime: ReadTimeDto): Promise<import(".prisma/client").ReadTime>;
    update(postId: any, dto: UpdatePostDto, userId: number): Promise<import(".prisma/client").Post>;
    delete(postId: any, userId: number): Promise<string>;
}
