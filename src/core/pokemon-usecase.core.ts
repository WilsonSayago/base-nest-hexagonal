interface PokemonUsecase {
  findById(id: string): Promise<Pokemon>;
}
