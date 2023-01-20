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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(role) {
        if (role === 'ADMIN') {
            try {
                const allUsers = await this.prisma.user.findMany();
                const allPosts = await this.prisma.post.findMany();
                return {
                    allUsers,
                    allPosts,
                };
            }
            catch (err) {
                throw err;
            }
        }
        throw new common_1.ForbiddenException('You are not Admin');
    }
    getUsersByPagination(role, take) {
        if (role === 'ADMIN') {
            return this.prisma.user.findMany({
                take,
            });
        }
        throw new common_1.ForbiddenException('You are not Admin');
    }
    getPostsByPagination(role, take) {
        if (role === 'ADMIN') {
            return this.prisma.post.findMany({
                take,
            });
        }
        throw new common_1.ForbiddenException('You are not Admin');
    }
    async removeUser(userRole, id) {
        if (userRole === 'ADMIN') {
            const user = await this.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (user) {
                await this.prisma.user.delete({
                    where: {
                        id,
                    },
                });
                return 'User is successfully deleted';
            }
            throw new common_1.ForbiddenException('User is not found');
        }
        throw new common_1.ForbiddenException('You are not Admin');
    }
    async removePost(userRole, id) {
        if (userRole === 'ADMIN') {
            const post = await this.prisma.post.findUnique({
                where: {
                    id,
                },
            });
            if (post) {
                await this.prisma.post.delete({
                    where: {
                        id,
                    },
                });
                return 'Post is successfully deleted';
            }
            throw new common_1.ForbiddenException('Post is not found');
        }
        throw new common_1.ForbiddenException('You are not Admin');
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map