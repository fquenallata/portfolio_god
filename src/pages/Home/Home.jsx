import PropTypes from 'prop-types';
import ChangeIdiom from '../../components/Buttons/ChangeIdiom';
import './Home.scss';

const Home = ({ t }) => {
	return (
		<section id='Home'>
			<ChangeIdiom text={t('idiom')} />
		</section>
	);
};

Home.propTypes = {
	t: PropTypes.func,
};

export default Home;
