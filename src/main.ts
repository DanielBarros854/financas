import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [`${process.env.FRONTEND_DOMAIN}`, 'http://localhost:3000'],
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  });

  await app.listen(process.env.PORT);
  console.log(
    `Server is running, GraphQL Playground available at http://localhost:${process.env.PORT}/graphql`,
  );
}

bootstrap();
