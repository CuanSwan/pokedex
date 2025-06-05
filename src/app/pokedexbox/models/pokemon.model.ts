export interface Pokemon{
    //name of the pokemon from PokeAPI
    name: string;
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
}