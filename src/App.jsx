import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';

function App() {
	return (
		<main className='main'>
			<h1 className=''>Esto es un nav</h1>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</main>
	);
}

export default App;
