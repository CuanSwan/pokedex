export interface Pokemon{
    //name of the pokemon from PokeAPI
    name: string;
    id: number;
    //height of the pokemon from PokeAPI
    height: number;
    //weight of the pokemon from PokeAPI
    weight: number;
    //Pokedex description from PokeAPI
    description: string;
    //List of sprite urls for the pokemon not sure if I want to include back sprites
    imgUrl: Object;
    //URL to the audio for the pokemons cry
    cryUrl: string;
    baseStats: Array<any>;
    types: Array<any>;
    abilities: Array<any>;
    moves: Array<any>;

}