import PropTypes from 'prop-types';
import SocialButtons from '../Buttons/SocialButtons';
import LetraFSVG from '../icons/LetraF';
import './Nav.scss';

const Nav = ({ t }) => {
	return (
		<section id='Nav'>
			<div className='logoName'>
				<div className='cuadradoRojo'></div>
				<LetraFSVG size='120' />
				<h3>Quenallata</h3>
			</div>
			<ul>
				<li>
					<a href='#home'>
						<p>{`•    `}</p>
						{`${t('nav.Home')}`}
					</a>
				</li>
				<li>
					<a href='#about'>
						<p>{`•    `}</p>
						{t('nav.About')}
					</a>
				</li>
				<li>
					<a href='#portfolio'>
						<p>{`•    `}</p>
						{t('nav.Portfolio')}
					</a>
				</li>
				<li>
					<a href='#skills'>
						<p>{`•    `}</p>
						{t('nav.Skills')}
					</a>
				</li>
			</ul>
			<div id='buttons'>
				<SocialButtons />
			</div>
		</section>
	);
};

Nav.propTypes = {
	t: PropTypes.func,
};

export default Nav;
