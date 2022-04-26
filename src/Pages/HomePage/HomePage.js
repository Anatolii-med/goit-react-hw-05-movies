import { useEffect, useState } from 'react';
import { fetchTopMovies } from '../../Services/fetchAPI';
import { List, ListItem, HeadTitle, LinkItem } from './HomePage.styled';

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
			<HeadTitle>Popular today:</HeadTitle>
			<List>
				{movies &&
					movies.map(movie => (
						<ListItem key={movie.id}>
							<LinkItem to={`movies/${movie.id}`}>
								{movie.original_title ?? movie.original_name}
							</LinkItem>
						</ListItem>
					))}
			</List>
		</>
	);
}
