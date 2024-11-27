import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFretes(): string {
    return 'Listagem de fretes !';
  }

  @Get('/:id')
  getByIdFretes(): string {
    return 'Detalhe do frete';
  }

  @Post()
  registerFrete(): string {
    return 'Cadastro de frete';
  }

  @Patch('/:id')
  updateFrete(): string {
    return 'Atualização de frete';
  }

  @Delete('/:id')
  deleteFrete(): string {
    return 'Deleção de frete';
  }
}
