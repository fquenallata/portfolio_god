import './About.scss';
import Image from '/About.png';

const About = () => {
	const onClickWork = () => {
		window.open('https://www.google.com', '_blank');
	};
	return (
		<section id='about'>
			<div className='content'>
				<img className='about-image' src={Image} alt='img_about' />
				<div className='text-about'>
					<h3>ABOUT ME</h3>
					<p>
						FullStack Developer con experiencia en el desarrollo de aplicaciones
						web. Me apasiona aprender nuevas tecnologías y aplicar mis
						conocimientos para ayudar a otros a alcanzar sus objetivos.
						Actualmente, me encuentro cursando el segundo año de la carrera
						Ingenieria de Sistemas en la Universidad Tecnológica Nacional -
						Facultad Regional de Buenos Aires- Argentina (UTN) y me comprometo a
						mantenerme actualizado en mi campo.
					</p>
					<div>
						<button className='button' onClick={onClickWork}>
							Descarga mi currículum!
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
