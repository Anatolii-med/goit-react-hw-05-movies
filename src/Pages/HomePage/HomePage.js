import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopMovies } from '../../Services/fetchAPI';
import { List, ListItem } from './HomePage.styled';

export function HomePage() {
	const [movies, setMovies] = useState('');
	useEffect(() => {
		async function fetchMovies() {
			try {
				await fetchTopMovies().then(setMovies);
			} catch (error) {
				console.log(error);
			} finally {
			}
		}
		fetchMovies();
	}, []);

	return (
		<>
			<h1>homePage</h1>
			<List>
				{movies &&
					movies.map(movie => (
						<ListItem key={movie.id}>
							<Link to={`movies/${movie.id}`}>
								{movie.original_title ?? movie.original_name}
							</Link>
						</ListItem>
					))}
			</List>
		</>
	);
}
