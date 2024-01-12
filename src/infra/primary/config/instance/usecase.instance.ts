import { PokemonService } from '../../../../core/service/pokemon.service';
import { ModuleRef } from '@nestjs/core';
import { PokemonRepository } from '../../../secundary/repository/pokemon.repository';

export const PokemonUseCaseInstance = (mr: ModuleRef): PokemonUsecase => {
  const pokemonRepository = mr.get(PokemonRepository, { strict: false });
  return new PokemonService(pokemonRepository);
};
