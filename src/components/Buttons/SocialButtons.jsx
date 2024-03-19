import GitHubIcon from '../../assets/icons/Github';
import GmailIcon from '../../assets/icons/Gmail';
import LinkedinIcon from '../../assets/icons/Linkedin';
import WhatsappIcon from '../../assets/icons/Whatsapp';

import './SocialButtons.scss';

const SocialButtons = () => {
	const themeMode = {
		size: '30',
	};
	return (
		<div className='socialButtons'>
			<GitHubIcon size={themeMode.size} fill='#000' />
			<GmailIcon size={themeMode.size} fill='#000' />
			<LinkedinIcon size={themeMode.size} fill='#000' />
			<WhatsappIcon size={themeMode.size} fill='#000' />
		</div>
	);
};

export default SocialButtons;
