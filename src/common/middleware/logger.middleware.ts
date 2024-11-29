import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const localDate = new Date(Date.now()).toLocaleString();
    console.log(
      `[App] ${req.method} ${req.url} Request IP: ${req.ip} at ${localDate}`,
    );
    next();
  }
}
