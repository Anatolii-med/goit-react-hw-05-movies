import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'Services/fetchAPI';

export function Review() {
	const { movieId } = useParams();
	const [reviews, setReview] = useState([]);

	useEffect(() => {
		if (!movieId) {
			return;
		}
		async function fetchR() {
			try {
				const response = await fetchReview(movieId);
				setReview(Array.from(response));
			} catch (error) {
				console.log(error);
			}
		}
		fetchR();
	}, [movieId]);

	return (
		<>
			{reviews.length === 0 ? (
				<p>nothing</p>
			) : (
				<div>
					<ul>
						{reviews.map(review => {
							return (
								<li key={review.id}>
									<p>{review.author}</p>
									<p>{review.content}</p>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}
