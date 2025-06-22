import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IceCreamService } from '../icecream.service';
import { CreateIceCreamCommand } from './../commands/create-icecream.command';

@CommandHandler(CreateIceCreamCommand)
export class CreateIceCreamHandler
  implements ICommandHandler<CreateIceCreamCommand>
{
  constructor(private readonly service: IceCreamService) {}

  async execute(command: CreateIceCreamCommand) {
    return this.service.create(command.flavor, command.price);
  }
}
