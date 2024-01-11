interface PokemonUsecase {
  findById(id: number): Promise<Pokemon>;
}
