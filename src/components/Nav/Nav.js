// import { NavLink } from 'react-router-dom';
import { LinkN, NavWrap } from './Nav.styled';
export function Navi() {
	return (
		<NavWrap>
			<LinkN to="/">Main</LinkN>
			<LinkN to="/movies">Search</LinkN>
		</NavWrap>
	);
}
