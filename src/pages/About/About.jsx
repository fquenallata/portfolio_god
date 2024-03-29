import './About.scss';
import Image from '/About.png';

const About = () => {
	return (
		<section id='about'>
			<div className='content'>
				<div>
					<img className='about-image' src={Image} alt='img_about' />
				</div>
				<div className='text-about'>
					<p>
						<h3>ABOUT ME</h3>
						Full Stack Developer skilled in creating and optimizing websites and
						applications for end users in a scalable and modular manner. I like
						to investigate, solve problems, learn from others and contribute
						ideas in order to achieve optimal results, that is why in me you
						will find a developer with the ability to resolve conflicts, willing
						to listen to ideas and contribute all my knowledge to achieve the
						goals. proposed objectives. I am proficient in JavaScript, HTML, and
						CSS, with hands-on experience in technologies such as Node.js,
						Express, Sequelize, PostgreSQL, React.js, and Redux. Additionally, I
						am well-versed in version control systems, particularly Git.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
