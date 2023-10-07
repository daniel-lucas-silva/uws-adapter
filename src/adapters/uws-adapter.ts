import { UWSRequest } from './uws-request';
import { UWSReply } from './uws-reply';

export function createHandlerAdapter(handler) {
  return context => {
    context.res = context.res || {};
    const req = new UWSRequest(context);
    const res = new UWSReply(context);
    handler(req, res);
  };
}
