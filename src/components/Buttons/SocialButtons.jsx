import GitHubIcon from '../icons/Github';
import GmailIcon from '../icons/Gmail';
import LinkedinIcon from '../icons/Linkedin';

import './SocialButtons.scss';

const SocialButtons = () => {
	const themeMode = {
		size: '40',
	};

	return (
		<div className='socialButtons'>
			<a href='https://www.linkedin.com/in/fquenallata/'>
				<LinkedinIcon size={themeMode.size} />
			</a>
			<span className='midSpan' />
			<a href='https://github.com/fquenallata'>
				<GitHubIcon className='icons' size={themeMode.size} />
			</a>
			<span className='midSpan' />
			<a href='mailto:quenallatafranco@gmail.com'>
				<GmailIcon size={themeMode.size} />
			</a>
			<span className='lastSpan' />
		</div>
	);
};

export default SocialButtons;
