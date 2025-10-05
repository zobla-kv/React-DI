import { useGlobalServices } from '../services';

export const Component2 = () => {
  const { counterService } = useGlobalServices();

  return (
    <div>
      <h2>Component 2</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span>counter: {counterService.count}</span>
        <button onClick={() => counterService.increment()}>increment</button>
      </div>
    </div>
  );
};
