import { useGlobalServices } from '../services';

export const Consumer = () => {
  const { counterService } = useGlobalServices();

  console.log('counterService: ', counterService);

  return <p>placeholder</p>;
};
