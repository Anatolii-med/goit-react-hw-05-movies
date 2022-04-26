import { useEffect, useState } from 'react';
import { MovieFinder } from '../../components/MovieFinder/formFinder';
import { fetchQueryMovie } from 'Services/fetchAPI';
import { useSearchParams } from 'react-router-dom';

import {
	List,
	ListItem,
	LinkItemsWrap,
	ItemName,
	ItemQueryTitle,
	ItemImg,
	ItemItem,
} from './MoviesPage.styled';

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
	}

	return (
		<>
			<MovieFinder onSubmit={onFormSubmit} queryItem={query} />

			{queryMovieList && (
				<>
					<ItemQueryTitle>
						We found this movies wich contain your query: "{query}"
					</ItemQueryTitle>

					<List>
						{queryMovieList.map(movie => (
							<ListItem key={movie.id}>
								<ItemItem to={`/movies/${movie.id}`}>
									<LinkItemsWrap>
										{movie.poster_path && (
											<ItemImg
												src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
												alt="poster"
												width="50"
											/>
										)}
										<ItemName>
											{movie.original_title ?? movie.original_name}
										</ItemName>
									</LinkItemsWrap>
								</ItemItem>
							</ListItem>
						))}
					</List>
				</>
			)}
		</>
	);
}
