import { Module } from '@nestjs/common';
import { PokemonResolver } from '../resolver/pokemon.resolver';
import { PokemonRepository } from '../../secundary/repository/pokemon.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PokemonDao,
  PokemonDaoSchema,
} from '../../secundary/repository/mongo/dao/pokemonDao';

@Module({
  controllers: [PokemonResolver],
  imports: [
    MongooseModule.forFeature([
      { name: PokemonDao.name, schema: PokemonDaoSchema },
    ]),
  ],
  providers: [PokemonRepository],
  exports: [],
})
export class PokemonModule {}
