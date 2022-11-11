import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Article } from './article.entity/article.entity';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  getAll() {
    return this.service.getArticles();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  update(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteArticle(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
