import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Dashboard } from '@/screens/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
