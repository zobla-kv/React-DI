import { createServiceProvider } from '../../../../src/ServicesProvider';
import { CounterService } from './CounterService';

export const [GlobalServicesProvider, useGlobalServices] =
  createServiceProvider({
    counterService: CounterService,
  });

export const [ChatServicesProvider, useChatServices] = createServiceProvider({
  counterService: CounterService,
});
