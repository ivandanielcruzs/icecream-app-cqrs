import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IceCreamService } from '../icecream.service';
import { UpdateIceCreamCommand } from './../commands/update-icecream.command';

@CommandHandler(UpdateIceCreamCommand)
export class UpdateIceCreamHandler
  implements ICommandHandler<UpdateIceCreamCommand>
{
  constructor(private readonly service: IceCreamService) {}

  async execute(command: UpdateIceCreamCommand) {
    return this.service.update(command.id, command.flavor, command.price);
  }
}
