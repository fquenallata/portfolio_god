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
		const sections = [
			{ id: 'home', label: 'home' },
			{ id: 'about', label: 'about' },
			{ id: 'portfolio', label: 'portfolio' },
			{ id: 'skills', label: 'skills' },
		];

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			let selected = 'home';

			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				const nextSection = sections[i + 1];

				const currentSection = document.getElementById(section.id);
				const nextSectionOffset = nextSection
					? document.getElementById(nextSection.id).offsetTop
					: Infinity;

				if (
					scrollPosition >= currentSection.offsetTop &&
					scrollPosition < nextSectionOffset
				) {
					selected = section.label;
					break;
				}
			}

			setSelectedLink(selected);
		};

		window.addEventListener('scroll', handleScroll);

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
