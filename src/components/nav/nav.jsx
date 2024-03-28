import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SocialButtons from '../Buttons/SocialButtons';
import LetraFSVG from '../icons/LetraF';
import './Nav.scss';

const Nav = ({ t }) => {
	const [selectedLink, setSelectedLink] = useState('home');

	const handleLinkClick = (link) => {
		setSelectedLink(link);
	};

	useEffect(() => {
		const handleScroll = () => {
			const homeSection = document.getElementById('home');
			const aboutSection = document.getElementById('about');
			const portfolioSection = document.getElementById('portfolio');
			const skillsSection = document.getElementById('skills');

			const scrollPosition = window.scrollY;

			if (
				scrollPosition >= homeSection.offsetTop &&
				scrollPosition < aboutSection.offsetTop
			) {
				setSelectedLink('home');
			} else if (
				scrollPosition >= aboutSection.offsetTop &&
				scrollPosition < portfolioSection.offsetTop
			) {
				setSelectedLink('about');
			} else if (
				scrollPosition >= portfolioSection.offsetTop &&
				scrollPosition < skillsSection.offsetTop
			) {
				setSelectedLink('portfolio');
			} else if (scrollPosition >= skillsSection.offsetTop) {
				setSelectedLink('skills');
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section id='Nav'>
			<div className='logoName'>
				<div className='cuadradoRojo'></div>
				<LetraFSVG size='120' />
				<h3>Quenallata</h3>
			</div>
			<ul>
				<li>
					<a
						href='#home'
						className={selectedLink === 'home' ? 'selected' : ''}
						onClick={() => handleLinkClick('home')}
					>
						<p>{`•    `}</p>
						{`${t('nav.Home')}`}
					</a>
				</li>
				<li>
					<a
						href='#about'
						className={selectedLink === 'about' ? 'selected' : ''}
						onClick={() => handleLinkClick('about')}
					>
						<p>{`•    `}</p>
						{t('nav.About')}
					</a>
				</li>
				<li>
					<a
						href='#portfolio'
						className={selectedLink === 'portfolio' ? 'selected' : ''}
						onClick={() => handleLinkClick('portfolio')}
					>
						<p>{`•    `}</p>
						{t('nav.Portfolio')}
					</a>
				</li>
				<li>
					<a
						href='#skills'
						className={selectedLink === 'skills' ? 'selected' : ''}
						onClick={() => handleLinkClick('skills')}
					>
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
