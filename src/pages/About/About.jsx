import PropTypes from 'prop-types';
import './About.scss';
import Image from '/About.png';

//https://res.cloudinary.com/dnyntegig/image/upload/v1715266408/archivosPenna/cvEnglish.pdf

const About = ({ t }) => {
	const downloadCV = () => {
		window.open(
			'https://res.cloudinary.com/dnyntegig/image/upload/v1714682361/archivosPenna/cvEspañol.pdf',
			'_blank'
		);
	};

	return (
		<section id='about'>
			<div className='content'>
				<img className='about-image' src={Image} alt='img_about' />
				<div className='text-about'>
					<h3>{`${t('about.title')}`}</h3>
					<p>
						{`${t('about.aboutText.1')}`}
						<span className='niceUnderline dynamic'>{`${t(
							'about.aboutText.2'
						)}`}</span>
						{`${t('about.aboutText.3')}`}
						<span className='niceUnderline creative'>{`${t(
							'about.aboutText.4'
						)}`}</span>
						<br />
						<br />
						{`${t('about.aboutText.5')}`}
						<span className='niceUnderline robust'>{`${t(
							'about.aboutText.6'
						)}`}</span>
						{`${t('about.aboutText.7')}`}
						<span className='niceUnderline ubication'>{`${t(
							'about.aboutText.8'
						)}`}</span>
						{`${t('about.aboutText.9')}`}
					</p>
					<div>
						<button className='button' onClick={downloadCV}>
							{`${t('about.downloadButton')}`}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

About.propTypes = {
	t: PropTypes.func,
};

export default About;
