import { Layout } from '../Pages/Layout/Layout';
import { HomePage } from '../Pages/HomePage/HomePage';
import { MoviesPage } from '../Pages/MoviesPage/MoviesPage';
import { MovieDetailPage } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Review } from './Reviews/Reviews';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
export const App = () => {
	return (
		<>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="movies" element={<MoviesPage />} />
						<Route path="movies/:movieId" element={<MovieDetailPage />}>
							<Route path="cast" element={<Cast />} />
							<Route path="review" element={<Review />} />
						</Route>
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</Suspense>
		</>
	);
};
