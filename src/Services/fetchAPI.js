import axios from 'axios';
const API_KEY = '2092ea308ebb6e1cdae36d6ed4a357cb';

export async function fetchTopMovies() {
	const response = await axios.get(
		`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
	);
	return response.data.results;
}

export async function fetchMovieInfo(movie_id) {
	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
	);
	console.log(response);
	return response.data;
}
