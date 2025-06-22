import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IceCreamService } from '../icecream.service';
import { DeleteIceCreamCommand } from './../commands/delete-icecream.command';

@CommandHandler(DeleteIceCreamCommand)
export class DeleteIceCreamHandler
  implements ICommandHandler<DeleteIceCreamCommand>
{
  constructor(private readonly service: IceCreamService) {}

  async execute(command: DeleteIceCreamCommand) {
    return this.service.delete(command.id);
  }
}
