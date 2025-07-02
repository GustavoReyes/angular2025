import { Movies } from './Movies';

const db = new Movies();

// Insertar películas
const movie1 = db.agragarMovie({
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: 148,
    genres: ["Action", "Sci-Fi"],
    rate: 8.8
});
const movie2 = db.agragarMovie({
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    genres: ["Action", "Sci-Fi"],
    rate: 8.7
});

console.log("Todas las películas:", db.allMovies());

// Actualizar película
db.actualizar(movie1.id, {
    rate: 9.0,
    title: undefined,
    year: undefined,
    director: undefined,
    duration: undefined,
    genres: undefined
});
console.log("Película actualizada:", db.moviesPorId(movie1.id));

// Borrar película
db.eliminar(movie2.id);
console.log("Películas después de borrar:", db.allMovies());