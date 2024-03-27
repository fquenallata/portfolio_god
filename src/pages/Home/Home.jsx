import PropTypes from 'prop-types';
import ChangeIdiom from '../../components/Buttons/ChangeIdiom';
import ThemeToggle from '../../components/Buttons/ThemeToggle';
import './Home.scss';

const Home = ({ t }) => {
	return (
		<section id='home'>
			<div className='toggles'>
				<ThemeToggle />
				<ChangeIdiom text={t('idiom')} />
			</div>
		</section>
	);
};

Home.propTypes = {
	t: PropTypes.func,
};

export default Home;
