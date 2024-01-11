import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDaoDocument = HydratedDocument<PokemonDao>;
@Schema()
export class PokemonDao {
  @Prop()
  name: string;
}
