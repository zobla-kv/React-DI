import './App.css';
import { GlobalServicesProvider } from './services';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';

function App() {
  return (
    <GlobalServicesProvider>
      <div style={{ display: 'flex ', gap: '200px' }}>
        <Component1 />
        <Component2 />
      </div>
    </GlobalServicesProvider>
  );
}

export default App;
