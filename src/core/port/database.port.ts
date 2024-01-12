interface DatabasePort {
  findById(id: string): Promise<Pokemon>;
}
