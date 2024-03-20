import { useState } from 'react';
import './ThemeToggle.scss';

const ThemeToggle = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleDarkMode = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className='toggle-switch'>
			<label className='switch-label'>
				<input
					type='checkbox'
					className='checkbox'
					checked={isChecked}
					onChange={toggleDarkMode}
				/>
				<span className='slider' />
			</label>
		</div>
	);
};

export default ThemeToggle;
