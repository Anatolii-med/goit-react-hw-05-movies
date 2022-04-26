import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkN = styled(NavLink)`
	display: inline-flex;
	justify-content: center;

	font-size: 20px;
	font-weight: 500;

	background-color: lightgray;
	border-radius: 5px;
	border: 2px solid darkgrey;

	width: 70px;
	margin: 20px;
	padding: 5px;

	transition: 200ms linear;

	&:hover {
		color: orange;
		background-color: #222222;
		box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.75);
		transform: translateY(-1px);
	}
	&.active {
		color: red;
		background-color: lightgreen;
	}
`;

export const NavWrap = styled.div`
	padding: 15px;
`;
