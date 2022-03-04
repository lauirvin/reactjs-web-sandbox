import axios from 'axios';
import { useEffect, useState } from 'react';

interface Character {
  name: string;
}

interface Film {
  title: string;
}

interface ReturnType {
  characters: Character[];
  films: Film[];
}

const useStarWarsDetails = (): ReturnType => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    Promise.all([
      axios.get('http://swapi.dev/api/people/'),
      axios.get('http://swapi.dev/api/films/'),
    ]).then(([charactersResponse, filmsResponse]) => {
      setCharacters(charactersResponse.data.results);
      setFilms(filmsResponse.data.results);
    });
  }, []);

  return { characters, films };
};
export default useStarWarsDetails;
