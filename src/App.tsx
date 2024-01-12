import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </ThemeProvider>
  );
}

export default App;
