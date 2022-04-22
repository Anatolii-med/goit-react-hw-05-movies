import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkN = styled(NavLink)`
	margin: 20px;
	font-size: 20px;
	&: hover {
		color: orange;
	}
	&.active {
		color: red;
	}
`;

export const NavWrap = styled.div`
	padding: 15px;
`;
