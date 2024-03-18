import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './config/i18next.config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
