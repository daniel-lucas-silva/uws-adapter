import * as uws from 'uWebSockets.js';
import { NestMiddleware } from '@nestjs/common';

type Next = () => void;
type Context = any;
type Middleware<E, T> = any;

export type NestKoaFunctionalMiddleware = (
  req: uws.HttpRequest,
  res: uws.HttpResponse,
  next: Next,
) => Promise<any> | any;

export interface NestKoaMiddleware {
  use(req: uws.HttpRequest, res: uws.HttpResponse, next: Next): Promise<any> | any;
}

export const koaToNestMiddleware =
  (middleware: Middleware<any, any>): NestKoaFunctionalMiddleware =>
  (req: uws.HttpRequest, res: uws.HttpResponse, next: Next) =>
    middleware(req.ctx, next);

export const nestToKoaMiddleware =
  (middleware: NestMiddleware['use']): Middleware<any, any> =>
  (ctx: Context, next: Next) =>
    middleware(ctx.request, ctx.response, next);