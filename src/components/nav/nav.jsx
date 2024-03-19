import SocialButtons from '../Buttons/SocialButtons';
import './Nav.scss';

const Nav = () => {
	return (
		<section>
			<h1>Franco Quenallata</h1>
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
