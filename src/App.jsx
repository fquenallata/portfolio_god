import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeIdiom from './components/Buttons/ChangeIdiom';
import ThemeToggle from './components/Buttons/ThemeToggle';
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Tests from './pages/Tests/Tests';
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
						<ThemeToggle />
						<ChangeIdiom text={t('idiom')} />
					</div>

					{/* pages */}
					<Home t={t} />
					<About />
					<Tests />
				</section>
			</Suspense>
		</main>
	);
}

export default App;
