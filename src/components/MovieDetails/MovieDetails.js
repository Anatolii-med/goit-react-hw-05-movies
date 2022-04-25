import { useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieInfo } from '../../Services/fetchAPI';

import { LinkN, NavWrap } from '../../components/Nav/Nav.styled';

export function MovieDetailPage() {
	const [movie, setMovie] = useState('');
	const { movieId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!movieId) {
			return;
		}
		async function fetchMovie() {
			try {
				const item = await fetchMovieInfo(movieId);
				setMovie(item);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovie();
	}, [movieId]);

	if (!movie) {
		return;
	}

	return (
		<>
			<button
				type="button"
				onClick={() => {
					navigate(-1);
				}}
			>
				GO BACK
			</button>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt="poster"
					width="200"
				/>
				<h3>{movie.original_title}</h3>
				<h4>User score</h4>
				<p>{movie.vote_average}</p>
				<h4>Overview:</h4>
				<p>{movie.overview}</p>
				<h4>Genres</h4>
				<p>
					{movie.genres.map(genre => {
						return genre.name;
					})}
				</p>
				{movie && (
					<>
						<NavWrap>
							<LinkN to={'cast'} replace={true}>
								Cast
							</LinkN>
							<LinkN to={'review'} replace={true}>
								Review
							</LinkN>
						</NavWrap>
						<Outlet />
					</>
				)}
			</div>
		</>
	);
}

// {data:
// adult: false
// backdrop_path: "/bQ8fRUaitJvi54O2lUT6Ta7FVHK.jpg"
// belongs_to_collection: {id: 285564, name: 'Jarhead Collection', poster_path: '/aRFpBjCseFD6UmahAuLdqS7Or5q.jpg', backdrop_path: '/ifSnip5tvaHvxLPAyjkiihE6T2I.jpg'}
// budget: 72000000
// genres: (2) [{…}, {…}]
// homepage: ""
// id: 25
// imdb_id: "tt0418763"
// original_language: "en"
// original_title: "Jarhead"
// overview: "Jarhead is a film about a US Marine Anthony Swofford’s experience in the Gulf War. After putting up with an arduous boot camp, Swofford and his unit are sent to the Persian Gulf where they are eager to fight, but are forced to stay back from the action. Swofford struggles with the possibility of his girlfriend cheating on him, and as his mental state deteriorates, his desire to kill increases."
// popularity: 29.79
// poster_path: "/vwsNvqbnLqmKpbllKtancDHzizC.jpg"
// production_companies: (2) [{…}, {…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2005-11-04"
// revenue: 97076152
// runtime: 123
// spoken_languages: (4) [{…}, {…}, {…}, {…}]
// status: "Released"
// tagline: "Welcome to the suck."
// title: "Jarhead"
// video: false
// vote_average: 6.6
// vote_count: 2276}
