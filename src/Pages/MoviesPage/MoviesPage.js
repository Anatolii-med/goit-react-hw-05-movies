import { useEffect, useState } from 'react';
import { MovieFinder } from '../../components/MovieFinder/formFinder';
import { fetchQueryMovie } from 'Services/fetchAPI';
import { Link, useSearchParams } from 'react-router-dom';

export function MoviesPage() {
	const [queryMovieList, setQueryMovieList] = useState('');
	const [query, setQuery] = useState('');
	const [urlQuery, setUrlQuery] = useSearchParams();
	const currentSerchParam = urlQuery.get('query');

	useEffect(() => {
		if (!query) {
			return;
		}

		setUrlQuery({ query: query });

		async function fetchQ() {
			try {
				const response = await fetchQueryMovie(query);
				setQueryMovieList(response);
			} catch (error) {
				console.log(error);
			}
		}
		fetchQ();
	}, [query, setUrlQuery]);

	useEffect(() => {
		if (currentSerchParam) {
			setQuery(currentSerchParam);
		}
	}, [currentSerchParam]);

	function onFormSubmit(e) {
		setQuery(e);
		console.log(query);
		console.log(queryMovieList);
	}

	return (
		<>
			<MovieFinder onSubmit={onFormSubmit} />

			{queryMovieList && (
				<>
					<h3>We found this movies wich contain your query: "{query}"</h3>

					<ul>
						{queryMovieList.map(movie => (
							<li key={movie.id}>
								<Link to={`/movies/${movie.id}`}>
									{movie.poster_path && (
										<img
											src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
											alt="poster"
											width="50"
										/>
									)}
									<p>{movie.original_title ?? movie.original_name}</p>
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}
