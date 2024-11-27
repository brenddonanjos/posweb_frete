import { Injectable } from '@nestjs/common';
import { CreateFreteDto } from './dto/create-frete.dto';
import { UpdateFreteDto } from './dto/update-frete.dto';

@Injectable()
export class FretesService {
  create(createFreteDto: CreateFreteDto) {
    return 'This action adds a new frete';
  }

  findAll() {
    return `This action returns all fretes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frete`;
  }

  update(id: number, updateFreteDto: UpdateFreteDto) {
    return `This action updates a #${id} frete`;
  }

  remove(id: number) {
    return `This action removes a #${id} frete`;
  }
}
