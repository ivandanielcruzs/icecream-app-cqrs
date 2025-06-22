import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IceCream } from './icecream.entity';

@Injectable()
export class IceCreamService {
  constructor(
    @InjectRepository(IceCream)
    private repo: Repository<IceCream>,
  ) {}

  async create(flavor: string, price: number): Promise<IceCream> {
    const ice = this.repo.create({ flavor, price });
    return this.repo.save(ice);
  }

  async findAll(): Promise<IceCream[]> {
    return this.repo.find();
  }

  async update(
    id: number,
    flavor: string,
    price: number,
  ): Promise<UpdateResult> {
    return this.repo.update({ id }, { flavor, price });
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.repo.delete({ id });
  }
}
