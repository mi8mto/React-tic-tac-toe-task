import React from 'react';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';

export const App = () => {
	return (
		<div>
			{<Header />}
			<div>
				<Game />
			</div>
		</div>
	);
};
