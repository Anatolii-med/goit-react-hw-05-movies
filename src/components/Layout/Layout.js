import { Outlet } from 'react-router-dom';
import { Navi } from 'components/Nav/Nav';
import { Suspense } from 'react';

export function Layout() {
	return (
		<>
			<Navi />
			<Suspense fallback={<h1>Loading...</h1>}>
				<Outlet />
			</Suspense>
		</>
	);
}
