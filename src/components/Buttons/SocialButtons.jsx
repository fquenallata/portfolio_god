import GitHubIcon from '../../assets/icons/Github';
import GmailIcon from '../../assets/icons/Gmail';
import LinkedinIcon from '../../assets/icons/Linkedin';

import './SocialButtons.scss';

const SocialButtons = () => {
	const themeMode = {
		size: '40',
	};
	return (
		<div className='socialButtons'>
			<GitHubIcon className='icons' size={themeMode.size} fill='#000' />
			<span className='midSpan' />
			<GmailIcon size={themeMode.size} fill='#000' />
			<span className='midSpan' />
			<LinkedinIcon size={themeMode.size} fill='#000' />
			<span className='lastSpan' />
		</div>
	);
};

export default SocialButtons;
