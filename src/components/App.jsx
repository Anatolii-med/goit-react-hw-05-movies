import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetail } from './MovieDetailsPage/MovieDetailsPage';
import { Layout } from './Layout/Layout';

import { Routes, Route } from 'react-router-dom';
export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="movies" element={<MoviesPage />} />
					<Route path="movies/:movieId" element={<MovieDetail />} />
				</Route>
			</Routes>
		</>
	);
};
