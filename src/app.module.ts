import { MiddlewareConsumer, Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import LogsMiddleware from './infra/middlewares/logs.middleware';

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
