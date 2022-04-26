import styled from 'styled-components';

export const ComponentWrap = styled.div`
	margin: 0 20px 20px 40px;
`;

export const ButtonBack = styled.button`
	display: inline-flex;
	justify-content: center;

	font-size: 20px;
	font-weight: 500;

	background-color: lightgray;
	border-radius: 5px;
	border: 2px solid darkgrey;

	width: 150px;
	margin: 0 0 20px 0;
	padding: 5px;

	transition: 200ms linear;

	&:hover {
		color: orange;
		background-color: #222222;
		box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.75);
		transform: translateY(-1px);
	}
`;

export const MovieWrap = styled.div`
	display: inline-flex;
	background-color: lightgoldenrodyellow;
	padding: 10px;
`;

export const MoviePoster = styled.img`
	margin-right: 30px;
	width: 35%;
	min-width: 240px;
`;

export const MovieTitle = styled.h3`
	font-size: 36px;
	margin: 0;
	padding: 0;
`;

export const MovieSubTitle = styled.h4`
	font-size: 18px;
	margin: 0;
	padding: 0;
`;
export const MovieSubDiscr = styled.p`
	display: inline-flex;
	font-size: 14px;
	margin: 0 0 10px 0;
	padding: 0;
`;

export const GenreList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	padding: 0;
`;

export const ListItem = styled.li`
	display: inline-flex;

	height: 20px;

	overflow: hidden;
`;
