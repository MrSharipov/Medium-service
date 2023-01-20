"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostsService = class PostsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async get(userId) {
        return await this.prisma.post.findMany({
            where: {
                userId,
            },
        });
    }
    async getById(userId, postId) {
        const post = await this.prisma.post.findUnique({
            where: {
                id: postId,
            },
        });
        if (!post || post.userId !== userId)
            throw new common_1.ForbiddenException('Post is not found. Access to resource is denied');
        return post;
    }
    async create(userId, dto) {
        const post = await this.prisma.post.create({
            data: Object.assign({ userId }, dto),
        });
        return post;
    }
    async update(userId, postId, dto) {
        const post = await this.prisma.post.findUnique({
            where: {
                id: postId,
            },
        });
        if (!post || post.userId !== userId)
            throw new common_1.ForbiddenException('Post is not found. Access to resource is denied');
        return this.prisma.post.update({
            where: {
                id: postId,
            },
            data: Object.assign({}, dto),
        });
    }
    async remove(userId, postId) {
        const post = await this.prisma.post.findUnique({
            where: {
                id: postId,
            },
        });
        if (!post || post.userId !== userId)
            throw new common_1.ForbiddenException('Post is not found. Access to resource is denied');
        await this.prisma.post.delete({
            where: {
                id: postId,
            },
        });
        return 'Post is successfully deleted';
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map