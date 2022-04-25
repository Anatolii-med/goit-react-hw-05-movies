import axios from 'axios';
const API_KEY = '2092ea308ebb6e1cdae36d6ed4a357cb';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTopMovies() {
	const response = await axios.get(
		`${BASE_URL}trending/all/week?api_key=${API_KEY}`
	);
	return response.data.results;
}
export async function fetchQueryMovie(query) {
	const response = await axios.get(
		`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
	);
	return response.data.results;
}

export async function fetchMovieInfo(movie_id) {
	const response = await axios.get(
		`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`
	);
	return response.data;
}

export async function fetchMovieImg() {
	const response = await axios.get(
		`${BASE_URL}configuration?api_key=${API_KEY}&language=en-US`
	);
	return response.data;
}
export async function fetchReview(movieId) {
	const response = await axios.get(
		`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
	);
	return response.data.results;
}
export async function fetchCast(movieId) {
	const response = await axios.get(
		`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
	);
	return response.data.cast;
}
