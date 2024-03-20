import PropTypes from 'prop-types';
import LetraFSVG from '../../icons/LetraF';
import SocialButtons from '../Buttons/SocialButtons';
import './Nav.scss';

const Nav = ({ t }) => {
	return (
		<section id='Nav'>
			<div className='logoName'>
				<div className='cuadradoRojo'></div>
				<LetraFSVG size='120' fill='#000' />
				<h5>Quenallata</h5>
			</div>
			<ul>
				<li>
					<a href='#'>
						<p>-</p>
						{t('nav.Home')}
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>
						{t('nav.About')}
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>
						{t('nav.Portfolio')}
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>
						{t('nav.Contact')}
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>
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
