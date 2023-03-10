import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator';
import { CreatePostDto, ReadTimeDto, UpdatePostDto } from './dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll(@GetUser('id') userId) {
    return this.postService.get(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getById(@Param('id', ParseIntPipe) postId, @GetUser('id') userId: number) {
    return this.postService.getById(userId, postId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() dto: CreatePostDto, @GetUser('id') userId: number) {
    return this.postService.create(userId, dto);
  }

  @Post('/:postId')
  saveReadTime(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() readTime: ReadTimeDto,
  ) {
    return this.postService.saveReadTime(postId, readTime.time);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) postId,
    @Body() dto: UpdatePostDto,
    @GetUser('id') userId: number,
  ) {
    return this.postService.update(userId, postId, dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) postId, @GetUser('id') userId: number) {
    return this.postService.remove(userId, postId);
  }
}
