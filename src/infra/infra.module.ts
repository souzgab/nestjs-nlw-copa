import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfraService } from './infra.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  providers: [InfraService],
  imports: [ConfigModule.forRoot(), LoggerModule],
})
export class InfraModule {}
