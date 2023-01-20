import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  //Get all data
  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  getAll(@GetUser('role') userRole) {
    return this.adminService.getAll(userRole);
  }
  //Get users by simple pagination
  @UseGuards(AuthGuard('jwt'))
  @Get('/users')
  getUsersByPagination(
    @GetUser('role') userRole,
    @Query('take', ParseIntPipe) take,
  ) {
    return this.adminService.getUsersByPagination(userRole, take);
  }

  //Delete user by id
  @UseGuards(AuthGuard('jwt'))
  @Delete('/users/:id')
  removeUserById(@Param('id', ParseIntPipe) id, @GetUser('role') userRole) {
    return this.adminService.removeUser(userRole, id);
  }

  //Get posts by simple pagination
  @UseGuards(AuthGuard('jwt'))
  @Get('/posts')
  getPostsByPagination(
    @GetUser('role') userRole,
    @Query('take', ParseIntPipe) take,
  ) {
    return this.adminService.getPostsByPagination(userRole, take);
  }

  //Delete post by id
  @UseGuards(AuthGuard('jwt'))
  @Delete('/posts/:id')
  removePostById(@Param('id', ParseIntPipe) id, @GetUser('role') userRole) {
    return this.adminService.removePost(userRole, id);
  }
}
