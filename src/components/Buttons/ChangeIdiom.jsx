import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ChangeIdiom.scss';

const ChangeIdiom = () => {
	const { i18n } = useTranslation(['global']);
	const [idiom, setIdiom] = useState('en');

	const toggleLanguage = () => {
		const newIdiom = idiom === 'es' ? 'en' : 'es';
		i18n.changeLanguage(newIdiom);
		setIdiom(newIdiom);
	};

	return (
		<div className='changeIdiomButton'>
			<div className='switch'>
				<input
					id='language-toggle'
					className='check-toggle check-toggle-round-flat'
					type='checkbox'
					onClick={toggleLanguage}
				/>
				<label htmlFor='language-toggle'></label>
				<span className='on'>en</span>
				<span className='off'>es</span>
			</div>
		</div>
	);
};

export default ChangeIdiom;
