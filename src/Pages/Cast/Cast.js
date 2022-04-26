import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Services/fetchAPI';
import { ListItem, List, Propert, ImgAct, PropertValue } from './Cast.styled';

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
			} catch (error) {
				console.log(error);
			}
		}
		fetchC();
	}, [movieId]);

	return (
		<>
			{casts.length === 0 ? (
				<p>We haven't any information about movie</p>
			) : (
				<div>
					<List>
						{casts.map(cast => {
							return (
								<ListItem key={cast.id}>
									{cast.profile_path && (
										<ImgAct
											src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
											alt="actor"
											width="100"
										/>
									)}

									<div>
										<Propert>
											Original name:{' '}
											<PropertValue>{cast.original_name}</PropertValue>{' '}
										</Propert>
										<Propert>
											Character: <PropertValue>{cast.character}</PropertValue>
										</Propert>
										<Propert>
											Popularity: <PropertValue>{cast.popularity}</PropertValue>
										</Propert>
									</div>
								</ListItem>
							);
						})}
					</List>
				</div>
			)}
		</>
	);
}
