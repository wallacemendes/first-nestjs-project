import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(HelloController);
  }
}
