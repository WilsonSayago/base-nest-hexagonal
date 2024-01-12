import { Module } from '@nestjs/common';
import { PokemonModule } from './infra/primary/module/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonRepository } from './infra/secundary/repository/pokemon.repository';
import {
  PokemonDao,
  PokemonDaoDocument,
  PokemonDaoSchema,
} from './infra/secundary/repository/mongo/dao/pokemonDao';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
