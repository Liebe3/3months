import React from "react";

const List = () => {
  const movies = [
    { id: 1, title: "The code", descriptiton: "The last piece of code" },
    { id: 2, title: "The mamba:", description: "The fall of mamba" },
    { id: 3, title: "Greek:", description: "Greek freak" },
  ];

  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {`${movie.id}.) `}
            {movie.title}
            {movie.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
