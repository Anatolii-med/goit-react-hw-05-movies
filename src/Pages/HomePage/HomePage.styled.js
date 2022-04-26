import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
	margin: 20px;
	list-style: none;
	padding: 0 20px 20px 20px;
`;

export const ListItem = styled.li`
	margin-top: 5px;
`;

export const HeadTitle = styled.h1`
	margin: 0 0 0 40px;
	display: inline-block;
	border-bottom: 1px solid black;
`;

export const LinkItem = styled(NavLink)`
	font-size: 18px;
	color: blue;
	&:hover {
		color: tomato;
	}

	transition: 250ms linear;
`;
