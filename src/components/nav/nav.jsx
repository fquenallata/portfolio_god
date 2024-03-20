import LetraFSVG from '../../assets/icons/LetraF';
import SocialButtons from '../Buttons/SocialButtons';
import './Nav.scss';

const Nav = () => {
	return (
		<section id='Nav'>
			<div className='logoName'>
				<LetraFSVG size='120' fill='#000' />
				<h4>Quenallata</h4>
			</div>
			<ul>
				<li>
					<a href='#'>
						<p>-</p>Home
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>About
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>Portfolio
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>Contact
					</a>
				</li>
				<li>
					<a href='#'>
						<p>-</p>Skills
					</a>
				</li>
			</ul>
			<div id='buttons'>
				<SocialButtons />
			</div>
		</section>
	);
};

export default Nav;
