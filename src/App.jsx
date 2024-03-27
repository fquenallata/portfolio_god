import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import './styles/main.scss';

function App() {
	const { t } = useTranslation(['global']);

	return (
		<main className='main'>
			<Suspense fallback='cargando traducciones'>
				<Nav t={t} />
				<Home t={t} />
			</Suspense>
		</main>
	);
}

export default App;
