import PropTypes from 'prop-types';

const gmailIcon = ({ width, height, fill, ...props }) => (
	<svg
		clipRule='evenodd'
		fillRule='evenodd'
		height={height}
		imageRendering='optimizeQuality'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
		viewBox='0 0 3000 3000'
		width={width}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M1500 0c828 0 1500 672 1500 1500s-672 1500-1500 1500S0 2328 0 1500 672 0 1500 0zm751 902l-1456-4 728 578zm-900 735l-636-500v950h1573v-930l-590 482c-200 163-140 160-347-2zM723 716h1569c127 0 230 104 230 230v1100c0 127-104 230-230 230H723c-127 0-230-104-230-230V946c0-127 104-230 230-230z'
			fill={fill}
		/>
	</svg>
);

gmailIcon.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	fill: PropTypes.string,
};

gmailIcon.defaultProps = {
	width: '30mm',
	height: '30mm',
	fill: 'white',
};

export default gmailIcon;
