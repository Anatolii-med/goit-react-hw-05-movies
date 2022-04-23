import { Outlet } from 'react-router-dom';
import { Navi } from 'components/Nav/Nav';

export function Layout() {
	return (
		<>
			<Navi />
			<Outlet />
		</>
	);
}
