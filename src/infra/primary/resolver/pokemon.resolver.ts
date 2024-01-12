import { Controller, Get, Param } from '@nestjs/common';
import { PokemonUseCaseInstance } from '../config/instance/usecase.instance';
import { ModuleRef } from '@nestjs/core';

@Controller('pokemon')
export class PokemonResolver {
  private readonly pokemonService: PokemonUsecase;
  constructor(private readonly moduleRef: ModuleRef) {
    this.pokemonService = PokemonUseCaseInstance(moduleRef);
  }
  @Get()
  findAll() {}
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.findById(id);
  }
}
