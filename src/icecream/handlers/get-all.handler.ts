import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IceCreamService } from '../icecream.service';
import { GetAllIceCreamsQuery } from './../queries/get-all.query';
import { IceCream } from '../icecream.entity';

@QueryHandler(GetAllIceCreamsQuery)
export class GetAllIceCreamsHandler
  implements IQueryHandler<GetAllIceCreamsQuery>
{
  constructor(private readonly service: IceCreamService) {}

  async execute(): Promise<IceCream[]> {
    return this.service.findAll();
  }
}
