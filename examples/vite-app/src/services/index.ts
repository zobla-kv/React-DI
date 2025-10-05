import { createServicesProvider } from '../../../../src/ServicesProvider';
import { CounterService } from './CounterService';

export const [GlobalServicesProvider, useGlobalServices] =
  createServicesProvider({
    counterService: CounterService,
  });

export const [ChatServicesProvider, useChatServices] = createServicesProvider({
  counterService: CounterService,
});
