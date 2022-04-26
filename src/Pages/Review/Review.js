import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'Services/fetchAPI';
import { Wrap, List, Item, NickName, Rev } from './Rewiew.styled';

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
				<h3>No reviews yet</h3>
			) : (
				<Wrap>
					<List>
						{reviews.map(review => {
							return (
								<Item key={review.id}>
									<NickName>{review.author}</NickName>
									<Rev>{review.content}</Rev>
								</Item>
							);
						})}
					</List>
				</Wrap>
			)}
		</>
	);
}
