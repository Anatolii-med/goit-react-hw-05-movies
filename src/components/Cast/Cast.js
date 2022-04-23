import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Services/fetchAPI';

export function Cast() {
	const { movieId } = useParams();
	const [casts, setCasts] = useState([]);

	useEffect(() => {
		if (!movieId) {
			return;
		}
		async function fetchC() {
			try {
				const response = await fetchCast(movieId);
				setCasts(response);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		}
		fetchC();
	}, [movieId]);

	return (
		<>
			{casts.length === 0 ? (
				<p>nothing</p>
			) : (
				<div>
					<ul>
						{casts.map(cast => {
							return (
								<li key={cast.id}>
									<img
										src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
										alt="actor"
										width="50"
									/>
									<p>Original name: {cast.original_name}</p>
									<p>Character: {cast.character}</p>
									<p>Popularity: {cast.popularity}</p>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}
