import { RxCross2 } from 'react-icons/rx';
import { FaRegCircle } from 'react-icons/fa';
export default function Square({ value, index, clickHandler }) {
	return (
		<div
			className='Square'
			onClick={() => clickHandler(index)}
		>
			{
                value === "X" ? <RxCross2 className='cross'/>: (value === "O" ? <FaRegCircle className='circle'/>: null) 
                }
		</div>
	);
}
