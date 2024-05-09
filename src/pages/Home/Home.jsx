import PropTypes from 'prop-types';
import Arrow from '../../components/Buttons/Arrow';
import './Home.scss';

const Home = ({ t }) => {
	const linkedinUrl = 'https://www.linkedin.com/in/fquenallata';

	const onClickWork = () => {
		window.open(linkedinUrl, '_blank');
	};

	return (
		<section id='home'>
			<span></span>
			<div className='content'>
				<h2>{`${t('home.title')}`}</h2>

				<h5>
					...& <i>{`${t('home.subTitle')}`}</i>.
				</h5>

				<p className='home-text'>
					{`${t('home.homeText.1')}`}
					<a href='#about'>
						<i>
							<strong> Franco Quenallata</strong>
						</i>
					</a>
					<div className='parche'>{`${t('home.homeText.2')}`}</div>
					<span className='label dynamic'>{`${t('home.homeText.3')}`}</span>,
					<span className='label creative'>{`${t('home.homeText.4')}`}</span>,
					{`${t('home.homeText.5')}`}
					<span className='label robust'>{`${t('home.homeText.6')}`}</span>
					{`${t('home.homeText.7')}`}
					<span className='label intuitive'>{`${t('home.homeText.8')}`}</span>
					{`${t('home.homeText.9')}`}
				</p>
				<div className='work-together'>
					<h3>
						<strong>
							<i>{`${t('home.buttonText.1')} ->`}</i>
						</strong>
					</h3>
					<button className='button' onClick={onClickWork}>
						{`${t('home.buttonText.2')}`}
					</button>
				</div>
			</div>
			<a href='#about' className='arrow-fixed'>
				<Arrow />
			</a>
		</section>
	);
};

Home.propTypes = {
	t: PropTypes.func,
};

export default Home;
