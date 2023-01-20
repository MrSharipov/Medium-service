import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}
  async getAll(role) {
    if (role === 'ADMIN') {
      try {
        const allUsers = await this.prisma.user.findMany();
        const allPosts = await this.prisma.post.findMany();
        return {
          allUsers,
          allPosts,
        };
      } catch (err) {
        throw err;
      }
    }
    throw new ForbiddenException('You are not Admin');
  }
  getUsersByPagination(role, take) {
    if (role === 'ADMIN') {
      return this.prisma.user.findMany({
        take,
      });
    }
    throw new ForbiddenException('You are not Admin');
  }

  getPostsByPagination(role, take) {
    if (role === 'ADMIN') {
      return this.prisma.post.findMany({
        take,
      });
    }
    throw new ForbiddenException('You are not Admin');
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
      throw new ForbiddenException('User is not found');
    }
    throw new ForbiddenException('You are not Admin');
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
      throw new ForbiddenException('Post is not found');
    }
    throw new ForbiddenException('You are not Admin');
  }
}
