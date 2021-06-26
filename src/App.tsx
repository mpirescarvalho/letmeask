import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { ThemeToggle } from './components/ThemeToggle';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { GlobalStyles } from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<AuthContextProvider>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/rooms/new" component={NewRoom} />
						<Route path="/rooms/:id" component={Room} />

						<Route path="/admin/rooms/:id" component={AdminRoom} />
					</Switch>
				</AuthContextProvider>
			</BrowserRouter>

			<ThemeToggle />
			<GlobalStyles />
			<ToastContainer />
		</ThemeContextProvider>
	);
}

export default App;
