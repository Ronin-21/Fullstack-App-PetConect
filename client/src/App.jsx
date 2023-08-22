import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store/store';
import { RouterProvider } from 'react-router-dom';

export const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={AppRouter} />
		</Provider>
	);
};
