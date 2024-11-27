import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FretesModule } from './fretes/fretes.module';

@Module({
  imports: [FretesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
