import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PokemonDao } from './mongo/dao/pokemonDao';

@Injectable()
export class PokemonRepository implements DatabasePort {
  constructor(
    @InjectModel(PokemonDao.name)
    private pokemonDaoModel: Model<PokemonDao>,
  ) {}

  findById(id: string): Promise<Pokemon> {
    return this.pokemonDaoModel.findById(id);
  }
}
