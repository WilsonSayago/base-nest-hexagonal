import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonUseCaseInstance } from '../config/instance/usecase.instance';

@Controller('pokemon')
export class PokemonController {
  readonly pokemonService: PokemonUsecase;
  constructor() {
    this.pokemonService = PokemonUseCaseInstance();
  }
  @Get()
  findAll() {}
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pokemon> {
    return this.pokemonService.findById(id);
  }
}
