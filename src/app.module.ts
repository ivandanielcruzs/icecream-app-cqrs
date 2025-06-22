import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IceCream } from './icecream/icecream.entity';
import { IceCreamModule } from './icecream/icecream.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [IceCream],
      synchronize: true,
    }),
    CqrsModule,
    IceCreamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
