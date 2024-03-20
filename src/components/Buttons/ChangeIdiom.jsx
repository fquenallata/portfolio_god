import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ChangeIdiom.scss';

const ChangeIdiom = ({ text }) => {
	const { i18n } = useTranslation(['global']);
	const [idiom, setIdiom] = useState('en');

	const toggleLanguage = () => {
		const newIdiom = idiom === 'es' ? 'en' : 'es';
		i18n.changeLanguage(newIdiom);
		setIdiom(newIdiom);
	};

	return (
		<div className='changeIdiomButton'>
			<button className='IdiomButton' onClick={toggleLanguage}>
				{text}
			</button>
		</div>
	);
};

ChangeIdiom.propTypes = {
	text: PropTypes.string,
};

export default ChangeIdiom;
