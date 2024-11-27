import { CreateFreteDto } from './dto/create-frete.dto';
import { UpdateFreteDto } from './dto/update-frete.dto';
export declare class FretesService {
    create(createFreteDto: CreateFreteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFreteDto: UpdateFreteDto): string;
    remove(id: number): string;
}
