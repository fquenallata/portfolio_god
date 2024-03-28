import './Home.scss';

const Home = () => {
	return (
		<section id='home'>
			<div className='content'>
				<h2>FULL STACK DEVELOPER</h2>

				<h5>
					...& <i>future systems engineer</i>.
				</h5>

				<p className='home-text'>
					GM, {`I'm`}{' '}
					<i>
						<strong>Franco Quenallata</strong>
					</i>
					. I enjoy building
					<strong>
						<span className='label dynamic'>dynamic</span>
					</strong>
					,<span className='label creative'>creative</span>
					products from start to finish. Focused on developing intuitive
					experiences that constantly grow and improve based on user metrics.
				</p>
				<i>Got something in mind?</i>
			</div>
		</section>
	);
};

export default Home;
