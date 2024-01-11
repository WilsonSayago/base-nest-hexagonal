
interface DatabasePort {
  findById(id: number): Promise<Pokemon>
}