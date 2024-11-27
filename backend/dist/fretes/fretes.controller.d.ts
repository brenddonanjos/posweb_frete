import { FretesService } from './fretes.service';
import { CreateFreteDto } from './dto/create-frete.dto';
import { UpdateFreteDto } from './dto/update-frete.dto';
export declare class FretesController {
    private readonly fretesService;
    constructor(fretesService: FretesService);
    create(createFreteDto: CreateFreteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFreteDto: UpdateFreteDto): string;
    remove(id: string): string;
}
