import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.grid}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}
					disabled={cell !== ''}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export const FieldContainer = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};
