import './Home.scss';

const Home = () => {
	const linkedinUrl = 'https://www.linkedin.com/in/fquenallata';

	const onClickWork = () => {
		window.open(linkedinUrl, '_blank');
	};

	return (
		<section id='home'>
			<div className='content'>
				<h2>FULL STACK DEVELOPER</h2>

				<h5>
					...& <i>future systems engineer</i>.
				</h5>

				<p className='home-text'>
					GM, {`I am`}{' '}
					<i>
						<strong>Franco Quenallata</strong>
					</i>
					. I enjoy building
					<strong>
						<span className='label dynamic'>dynamic</span>
					</strong>
					,<span className='label creative'>creative</span>, and
					<span className='label robust'>robust</span> products from start to
					finish. Focused on developing
					<span className='label intuitive'>intuitive</span>
					experiences that constantly grow and improve based on user metrics.
				</p>
				<div className='work-together'>
					<h3>
						<strong>
							<i>{`Got something in mind? ->`}</i>
						</strong>
					</h3>
					<button className='button' onClick={onClickWork}>
						Let`s work together!
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;
