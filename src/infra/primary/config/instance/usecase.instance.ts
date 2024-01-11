import {PokemonService} from "../../../../core/service/pokemon.service";
import {DatabasePortInstance} from "./port.instance";


export const PokemonUseCaseInstance = () => {
  return new PokemonService(DatabasePortInstance());
}