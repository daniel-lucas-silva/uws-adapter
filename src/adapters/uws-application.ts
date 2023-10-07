import { INestApplication } from '@nestjs/common';

export interface NestUWSApplication extends INestApplication {
  use(...middleware: any[]): this;

  useStaticAssets(path: string, options?: any): this;

  setViewEngine(options: any): this;
}
