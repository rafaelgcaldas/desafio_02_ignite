import { useContext } from "react";

import { List, AutoSizer, ListRowRenderer } from "react-virtualized";

import { NavigationContext } from "../contexts/NavigationContext";

import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

import '../styles/content.scss';


export function Content() {
  // Complete aqui
  const { movies } = useContext(NavigationContext);

  const rowRender: ListRowRenderer = ({index, key, style}) => {
    return (
      <div key ={key} style ={style}>
        <MovieCard 
          title={movies[index].Title} 
          poster={movies[index].Poster} 
          runtime={movies[index].Runtime} 
          rating={movies[index].Ratings[0].Value} 
        />
      </div>
    )
  }

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          <AutoSizer>
            {({height, width}) => (
              <List 
                height={height}
                rowHeight={350}
                width={width}
                overscanRowCount={5}
                rowCount={movies.length}
                rowRenderer={rowRender}
              />
            )}
          </AutoSizer>
         
        </div>
      </main>
    </div>
  );
}