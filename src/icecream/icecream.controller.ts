import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateIceCreamCommand } from './commands/create-icecream.command';
import { UpdateIceCreamCommand } from './commands/update-icecream.command';
import { DeleteIceCreamCommand } from './commands/delete-icecream.command';
import { GetAllIceCreamsQuery } from './queries/get-all.query';

@Controller('icecreams')
export class IceCreamController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() body: { flavor: string; price: number }) {
    return this.commandBus.execute(
      new CreateIceCreamCommand(body.flavor, body.price),
    );
  }

  @Get()
  getAll() {
    return this.queryBus.execute(new GetAllIceCreamsQuery());
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { flavor: string; price: number },
  ) {
    return this.commandBus.execute(
      new UpdateIceCreamCommand(+id, body.flavor, body.price),
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteIceCreamCommand(+id));
  }
}
