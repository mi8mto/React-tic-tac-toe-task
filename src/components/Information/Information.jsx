import React from 'react';
import PropTypes from 'prop-types';
import styles from './Information.module.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	let statusMessage = '';

	if (isDraw) {
		statusMessage = 'Ничья';
	} else if (isGameEnded) {
		statusMessage = `Победа: ${currentPlayer} !`;
	} else {
		statusMessage = `Ходит: "${currentPlayer}"`;
	}

	return <div className={styles.status}>{statusMessage}</div>;
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};
