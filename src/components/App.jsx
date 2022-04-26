import { Layout } from './Layout/Layout';

// import { Cast } from '../Pages/Cast/Cast';
// import { Review } from '../Pages/Reviews/Reviews';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const AsyncPageLoad = componentName => {
	return lazy(() => {
		return import(`Pages/${componentName}/${componentName}`).then(module => {
			return { default: module[componentName] };
		});
	});
};

const HomePage = AsyncPageLoad('HomePage');
const MoviesPage = AsyncPageLoad('MoviesPage');
const MovieDetailPage = AsyncPageLoad('MovieDetailPage');
const Cast = AsyncPageLoad('Cast');
const Review = AsyncPageLoad('Review');

export const App = () => {
	return (
		<>
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
		</>
	);
};
