import { useState } from 'react';
import Square from './Square';
import { RxCross2 } from 'react-icons/rx';
import { FaRegCircle } from 'react-icons/fa';

export default function GameBoard() {
	const [state, setState] = useState(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);
	function handleClick(index) {
		if (state[index] !== null) {
			return;
		}
		let newState = [...state];
		newState[index] = isXTurn ? 'X' : 'O';
		setState(newState);
		setIsXTurn(!isXTurn);
	}

	function checkWinner() {
		const winnerLogic = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		return winnerLogic.some((winCond) => {
			let [a, b, c] = winCond;
			return (
				state[a] !== null && state[a] === state[b] && state[a] === state[c]
			);
		});
	}
	function checkDraw() {
		return state.every((val) => val !== null);
	}
	function resetGame() {
		setIsXTurn(true);
		setState(Array(9).fill(null));
	}

	return (
		<div>
			<div
				className='gameBoard'
				style={{ pointerEvents: checkWinner() ? 'none' : 'auto' }}
			>
				{[0, 1, 2].map((row) => {
					return (
						<div key={row}>
							{[0, 1, 2].map((col) => {
								return (
									<Square
										key={row * 3 + col}
										index={row * 3 + col}
										clickHandler={handleClick}
										value={state[row * 3 + col]}
									></Square>
								);
							})}
						</div>
					);
				})}
			</div>
			<div id='status'>
				<h2>
					{checkWinner() ? (
						<span>
							Player
							{isXTurn ? (
								<FaRegCircle className='circle' />
							) : (
								<RxCross2 className='cross' />
							)}
							wins!
						</span>
					) : checkDraw() ? (
						<span>It's a draw!</span>
					) : (
						<span>
							Next player:
							{isXTurn ? (
								<RxCross2 className='cross' />
							) : (
								<FaRegCircle className='circle' />
							)}
						</span>
					)}
				</h2>
			</div>
			<div>
				<button
					id='resetBtn'
					onClick={resetGame}
				>
					RESET
				</button>
			</div>
		</div>
	);
}
