import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Post()
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Put()
  update(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Delete(':id')
  deleteArticle(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
