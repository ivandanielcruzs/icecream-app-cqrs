import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { IceCream } from './icecream.entity';
import { IceCreamService } from './icecream.service';
import { IceCreamController } from './icecream.controller';
import { CreateIceCreamHandler } from './handlers/create-icecream.handler';
import { UpdateIceCreamHandler } from './handlers/update-icecream.handler';
import { DeleteIceCreamHandler } from './handlers/delete-icecream.handler';
import { GetAllIceCreamsHandler } from './handlers/get-all.handler';

@Module({
  imports: [TypeOrmModule.forFeature([IceCream]), CqrsModule],
  controllers: [IceCreamController],
  providers: [
    IceCreamService,
    CreateIceCreamHandler,
    UpdateIceCreamHandler,
    DeleteIceCreamHandler,
    GetAllIceCreamsHandler,
  ],
})
export class IceCreamModule {}
