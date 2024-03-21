import PropTypes from 'prop-types';
import ChangeIdiom from '../../components/Buttons/ChangeIdiom';
import ThemeToggle from '../../components/Buttons/ThemeToggle';
import './Home.scss';

const Home = ({ t }) => {
	return (
		<section id='Home'>
			<ThemeToggle />
			<ChangeIdiom text={t('idiom')} />
		</section>
	);
};

Home.propTypes = {
	t: PropTypes.func,
};

export default Home;
