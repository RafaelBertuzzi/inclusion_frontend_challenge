import { store } from '@/redux/store';
import { Routes } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
