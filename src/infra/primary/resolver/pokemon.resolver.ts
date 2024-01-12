import { Controller, Get, Param } from '@nestjs/common';
import { PokemonUseCaseInstance } from '../config/instance/usecase.instance';
import { ModuleRef } from '@nestjs/core';
import { Pokemon } from '../../../core/domain/pokemon.domain';
import { PokemonUsecase } from '../../../core/pokemon-usecase.core';

@Controller('pokemon')
export class PokemonResolver {
  private readonly pokemonService: PokemonUsecase;
  constructor(private readonly moduleRef: ModuleRef) {
    this.pokemonService = PokemonUseCaseInstance(moduleRef);
  }
  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.findById(id);
  }
}
