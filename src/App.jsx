import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './index.scss';
import Home from './pages/Home/Home';

function App() {
	return (
		<main className='main'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</main>
	);
}

export default App;
