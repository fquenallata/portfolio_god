import PropTypes from 'prop-types';

const whatsappIcon = ({ width, height, fill, ...props }) => (
	<svg
		version='1.1'
		id='Layer_1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		x='0px'
		y='0px'
		viewBox='0 0 512 512'
		style={{ enableBackground: 'new 0 0 512 512' }}
		xmlSpace='preserve'
		width={width}
		height={height}
		{...props}
	>
		<style type='text/css'>{`.st0{fill:${fill};}`}</style>
		<title>01</title>
		<g>
			<path
				className='st0'
				d='M195.1,143.2c-55.8,40.2-68.5,118-28.3,173.8c2.7,3.8,3.2,8.8,1.3,13.1l-14.3,31.6l41.3-11.3
        c1.1-0.3,2.3-0.5,3.5-0.5c2.3,0,4.6,0.6,6.7,1.8c19,11.1,40.7,17,62.7,17v0c26.1,0,51.6-8.2,72.8-23.5
        c55.8-40.2,68.5-118,28.3-173.8S250.9,103,195.1,143.2z M341.9,292.5c-4.6,11.2-16.1,18.5-27.8,20.7c-11.2,2.2-20.4-1.4-30.7-4.8
        c-9.2-3.2-18.1-7.4-26.4-12.5c-16.5-10.2-30.8-23.6-42.3-39.2c-3.5-4.8-6.8-9.7-9.7-14.8c-4-6.7-7.5-13.9-9.3-21.6
        c-0.8-3.2-1.2-6.5-1.2-9.7c-0.1-11.6,4.3-23.2,13.4-30.7c5.3-4.3,13.1-6.2,19.1-2.8c6.5,3.6,9.8,12.8,12.8,19.3
        c2.3,5,4.9,11.7,4,17.3c-0.9,5.7-5.4,10.5-9,14.7c-2.4,2.8-2.8,5.3-0.8,8.3c11.8,19.7,28.3,34,49.7,42.6
        c2.9,1.2,5.2,0.8,7.1-1.5c3.7-4.6,7.3-13.5,13.1-15.9c7.5-3,15.7,1.2,22,5c5.9,3.5,15.7,7.8,17.3,15.1
        C343.8,285.5,343.3,289.2,341.9,292.5z'
			/>
			<path
				className='st0'
				d='M256,6C118.2,6,6,118.2,6,256s112.2,250,250,250s250-112.1,250-250S393.9,6,256,6z M267.8,395.1
        c-24.8,0-49.2-6.1-71.1-17.8l-63.2,17.3c-3,0.8-6.1,0.6-8.9-0.7c-6.6-3-9.6-10.8-6.5-17.5l23-50.5c-15.8-24.3-24.2-52.8-24.1-81.8
        c0-83.2,67.7-150.9,150.9-150.9c83.2,0,150.9,67.7,150.9,150.9S351,395.1,267.8,395.1z'
			/>
		</g>
	</svg>
);

whatsappIcon.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fill: PropTypes.string,
};

whatsappIcon.defaultProps = {
	width: 512,
	height: 512,
	fill: '#ffffff',
};

export default whatsappIcon;
