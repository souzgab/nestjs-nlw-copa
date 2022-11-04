import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({
  providers: [LoggerService, ConfigService],
  exports: [LoggerService],
})
export class LoggerModule {}
