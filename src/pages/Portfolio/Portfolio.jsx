import PropTypes from 'prop-types';
import './Portfolio.scss';

const Portfolio = ({ t }) => {
	return (
		<section id='portfolio'>
			<h2>{`${t('portfolio.title')}`}</h2>
			<div className='content'>
				<div className='item'>
					<div className='number'>(01)</div>
					<div className='preview'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
						eveniet impedit enim fugit cum sint veniam eaque animi deserunt
						labore praesentium reprehenderit.
					</div>
				</div>
				<div className='item'>
					<div className='number'>(01)</div>
					<div className='preview'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
						eveniet impedit enim fugit cum sint veniam eaque animi deserunt
						labore praesentium reprehenderit.
					</div>
				</div>
				<div className='item'>
					<div className='number'>(01)</div>
					<div className='preview'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
						eveniet impedit enim fugit cum sint veniam eaque animi deserunt
						labore praesentium reprehenderit.
					</div>
				</div>
				<div className='item'>
					<div className='number'>(01)</div>
					<div className='preview'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
						eveniet impedit enim fugit cum sint veniam eaque animi deserunt
						labore praesentium reprehenderit.
					</div>
				</div>
			</div>
		</section>
	);
};

Portfolio.propTypes = {
	t: PropTypes.func,
};

export default Portfolio;
