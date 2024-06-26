import PropTypes from 'prop-types';

const GitHubIcon = ({ size, ...props }) => (
	<svg
		className='icons'
		version='1.1'
		id='Layer_1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		x='0px'
		y='0px'
		width={size}
		height={size}
		viewBox='0 0 32 32'
		xmlSpace='preserve'
		{...props}
	>
		<title>github</title>
		<path d='M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2c0.8,0.2,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.2-5.4-2.2 c-0.7-1.8-1.8-2.3-1.8-2.3c-1.4-1,0.1-1,0.1-1c1.6,0.1,2.4,1.6,2.4,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1 c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.8,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.1-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5 c1.4,0,2.7,0.2,4,0.5C23,6.6,24.4,7,24.4,7c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9 c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.8c6.4-2.1,11-8.1,11-15.2C32,7.6,24.8,0.4,16,0.4L16,0.4z' />
	</svg>
);

GitHubIcon.propTypes = {
	size: PropTypes.string,
	fill: PropTypes.string,
};

export default GitHubIcon;
