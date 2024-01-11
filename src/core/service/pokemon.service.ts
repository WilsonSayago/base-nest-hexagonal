export class PokemonService implements PokemonUsecase {
  readonly dbport: DatabasePort;
  constructor(dbport: DatabasePort) {
    this.dbport = dbport;
  }
  async findById(id: number): Promise<Pokemon> {
    return this.dbport.findById(id);
  }
}
