import { Module } from '@nestjs/common';
import { PokemonModule } from './infra/primary/module/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}