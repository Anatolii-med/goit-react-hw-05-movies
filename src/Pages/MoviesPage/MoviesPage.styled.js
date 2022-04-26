import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItemsWrap = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;

	width: 320px;
`;

export const ItemName = styled.p`
	display: flex;
`;

export const ItemQueryTitle = styled.h3`
	display: inline-flex;
	width: 100%;
	justify-content: center;
	margin: 20px 0 0 0;
`;

export const ItemImg = styled.img`
	margin-right: 15px;
	width: 80px;
`;

export const ItemItem = styled(NavLink)`
	width: 95%;
	transition: 200ms linear;
	&:hover {
		background: lightgray;
		transform: scale(0.95);
		border-radius: 5px;
		border: 1px solid black;
	}
`;

export const ListItem = styled.li`
	display: inline-flex;

	margin: 10px 20px 10px 10px;

	width: 30%;
	height: 180px;
	min-width: 200px;
	transition: 250ms linear;

	overflow: hidden;
`;
export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	margin: 40px;
	padding: 0;
`;
