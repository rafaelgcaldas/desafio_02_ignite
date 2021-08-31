import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type MovieProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type GenreResponseType = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type NavigationContextProviderProps = {
  children: ReactNode;
}

type NavigationContextType = {
  selectedGenreId: number;
  movies: MovieProps[];
  selectedGenre: GenreResponseType;
  setSelectedGenreId: (id: number) => void;
}

export const NavigationContext = createContext({} as NavigationContextType);

export function NavigationContextProvider({ children }: NavigationContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseType>({} as GenreResponseType);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseType>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <NavigationContext.Provider value={
      {
        selectedGenreId, 
        movies,
        selectedGenre,
        setSelectedGenreId,
      }
    }>
      {children}
    </NavigationContext.Provider>
  );
}