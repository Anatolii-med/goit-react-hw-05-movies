import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopMovies } from '../../Services/fetchAPI';
import { List, ListItem } from './HomePage.styled';

export function HomePage() {
	const [movies, setMovies] = useState('');
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		async function fetchMovies() {
			setLoader(true);
			try {
				await fetchTopMovies().then(setMovies);
			} catch (error) {
				console.log(error);
			} finally {
				setLoader(false);
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
