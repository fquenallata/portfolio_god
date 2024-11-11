import PropTypes from 'prop-types';
import './Skills.scss';

const Skills = ({ t }) => {
	return (
		<section id='skills'>
			<h2>{`${t('skills.title')}`}</h2>
		</section>
	);
};

Skills.propTypes = {
	t: PropTypes.func,
};

export default Skills;
