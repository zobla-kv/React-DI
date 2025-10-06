import './App.css';
import { GlobalServicesProvider, ChatServicesProvider } from './services';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';

function App() {
  return (
    <GlobalServicesProvider>
      <div style={{ display: 'flex', gap: '200px' }}>
        <Component1 />
        <ChatServicesProvider>
          <Component2 />
        </ChatServicesProvider>
      </div>
    </GlobalServicesProvider>
  );
}

export default App;
