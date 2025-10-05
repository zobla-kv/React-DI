import './App.css';
import { GlobalServicesProvider } from './services';
import { Consumer } from './components/Consumer';

function App() {
  return (
    <div>
      <GlobalServicesProvider>
        <Consumer />
      </GlobalServicesProvider>
    </div>
  );
}

export default App;
