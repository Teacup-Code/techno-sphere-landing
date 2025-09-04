import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs'; // Importe o hbs

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configure o motor de templates aqui
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  // hbs.registerPartials(join(__dirname, '..', 'views', 'partials')); // Opcional, para componentes reutilizáveis

  await app.listen(3000);
}
bootstrap();
