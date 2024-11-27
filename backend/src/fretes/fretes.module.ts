import { Module } from '@nestjs/common';
import { FretesService } from './fretes.service';
import { FretesController } from './fretes.controller';

@Module({
  controllers: [FretesController],
  providers: [FretesService],
})
export class FretesModule {}
