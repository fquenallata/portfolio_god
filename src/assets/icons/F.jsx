import PropTypes from 'prop-types';

const FSVG = ({
	width,
	height,
	fill,
	stroke,
	viewBox,
	preserveAspectRatio,
}) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox={viewBox}
			preserveAspectRatio={preserveAspectRatio}
			fill={fill}
			stroke={stroke}
		>
			<g transform='translate(0.000000,690.000000) scale(0.100000,-0.100000)'>
				<path d='M770 3650 l0 -2740 2715 0 2715 0 -2 2162 -3 2163 -212 3 -213 2 -2 -1942 -3 -1943 -2275 0 -2275 0 0 2290 0 2290 2030 5 2030 5 3 223 2 222 -2255 0 -2255 0 0 -2740z' />
				<path d='M2590 3605 l0 -1705 370 0 370 0 0 644 c0 354 3 651 6 660 5 14 57 16 480 16 l474 0 0 370 0 370 -475 0 -475 0 -5 23 c-3 12 -4 148 -3 302 l3 280 668 3 667 2 0 370 0 370 -1040 0 -1040 0 0 -1705z' />
			</g>
		</svg>
	);
};

FSVG.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fill: PropTypes.string,
	stroke: PropTypes.string,
	viewBox: PropTypes.string,
	preserveAspectRatio: PropTypes.string,
};

export default FSVG;
