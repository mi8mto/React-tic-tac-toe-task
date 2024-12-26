import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { FieldContainer } from '../Field/Field';
import { InformationContainer } from '../Information/Information';
import styles from './Game.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const GameLayout = ({
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	onCellClick,
	onReset,
}) => {
	return (
		<div className={styles.game}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer field={field} onCellClick={onCellClick} />
			<button className={styles.resetButton} onClick={onReset}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	onCellClick: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
};

export const Game = () => {
	const [field, setField] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const checkWinner = (field) => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a]; // Возвращаем символ победителя
			}
		}
		return null;
	};

	const onCellClick = (index) => {
		if (field[index] || isGameEnded) return; // Если клетка уже занята или игра завершена

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const winner = checkWinner(newField);
		if (winner) {
			setIsGameEnded(true);
			return;
		}

		const isFull = newField.every((cell) => cell !== '');
		if (isFull) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const onReset = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<GameLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			onCellClick={onCellClick}
			onReset={onReset}
		/>
	);
};
