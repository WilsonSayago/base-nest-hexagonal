export class PokemonService implements PokemonUsecase {
  readonly dbport: DatabasePort;
  constructor(dbport: DatabasePort) {
    this.dbport = dbport;
  }
  async findById(id: string): Promise<Pokemon> {
    return this.dbport.findById(id);
  }
}
