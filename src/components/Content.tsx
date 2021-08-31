import { useContext } from "react";

import { NavigationContext } from "../contexts/NavigationContext";

import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

import '../styles/content.scss';


export function Content() {
  // Complete aqui
  const { movies } = useContext(NavigationContext);

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              key ={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}