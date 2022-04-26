import styled from 'styled-components';

export const ListItem = styled.li`
	display: inline-flex;

	margin: 10px 20px 10px 10px;

	width: 300px;
	height: 160px;
	min-width: 200px;

	&:nth-child(odd) {
		background-color: #aaaaaa;
	}

	&:nth-child(2n) {
		background-color: #777;
	}

	&:last-child {
		margin: 0;
	}
`;
export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 40px;
	padding: 10px;

	background-color: #bbb;
`;

export const Propert = styled.p`
	margin: 10px 0 0 0;
	font-weight: 500;
`;
export const PropertValue = styled.span`
	font-weight: 400;
`;

export const ImgAct = styled.img`
	margin: 0 20px 0 0;
`;
