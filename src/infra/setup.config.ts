import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { LoggerService as Logger } from './logger/logger.service';

export const setup = (app: NestFastifyApplication) => {
  app.useLogger(app.get(Logger));
};
