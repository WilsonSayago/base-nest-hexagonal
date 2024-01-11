import { Module } from '@nestjs/common';
import {PokemonController} from "../resolver/pokemon.controller";

@Module({
  controllers: [PokemonController],
  providers: []
})
export class PokemonModule {}
