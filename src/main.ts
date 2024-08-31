import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(
    `Server is running, GraphQL Playground available at http://localhost:${process.env.PORT}/graphql`,
  );
}
bootstrap();
