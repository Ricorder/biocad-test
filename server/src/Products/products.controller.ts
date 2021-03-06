import {
  Controller,
  Get,
} from '@nestjs/common';
import { ProductService } from './products.service';

@Controller()
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }

  @Get('all')
  async getAall() {
    return this.productService.all();
  }
}
