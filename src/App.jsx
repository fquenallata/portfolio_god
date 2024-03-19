import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import './styles/main.scss';

function App() {
	return (
		<main className='main'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/About' element={<Home />} />
			</Routes>
		</main>
	);
}

export default App;
