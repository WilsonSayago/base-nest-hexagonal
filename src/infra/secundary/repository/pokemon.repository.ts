import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { PokemonDao, PokemonDaoDocument } from './mongo/dao/pokemon.dao';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectModel(PokemonDao.name)
    private readonly dao: Model<PokemonDaoDocument, PokemonDao>,
  ) {}

  async findById(id: string): Promise<PokemonDao> {
    return await this.dao.findById(id);
  }
}
