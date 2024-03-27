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
			<LinkedinIcon size={themeMode.size} />
			<span className='midSpan' />
			<GitHubIcon className='icons' size={themeMode.size} />
			<span className='midSpan' />
			<GmailIcon size={themeMode.size} />
			<span className='lastSpan' />
		</div>
	);
};

export default SocialButtons;
