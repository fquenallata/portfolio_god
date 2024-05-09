import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeIdiom from './components/Buttons/ChangeIdiom';

import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import './styles/App.scss';

function App() {
	const { t } = useTranslation(['global']);

	return (
		<main className='main'>
			<Suspense fallback='cargando traducciones'>
				<Nav t={t} />

				{/* contenido */}
				<section id='content'>
					{/* //toggles flotantes*/}
					<div className='toggles'>
						<ChangeIdiom text={t('idiom')} />
					</div>

					{/* pages */}

					<Home t={t} />
					<About t={t} />
					<Portfolio />
					<Skills />
				</section>
			</Suspense>
		</main>
	);
}

export default App;
