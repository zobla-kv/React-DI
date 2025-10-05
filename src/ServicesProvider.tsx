import React, { createContext, useContext, ReactNode } from 'react';

type ServiceFactories = Record<string, () => unknown>;
type ServiceInstances<T extends ServiceFactories> = {
  [K in keyof T]: ReturnType<T[K]>;
};

export function createServiceProvider<T extends ServiceFactories>(
  factories: T
) {
  type Instances = ServiceInstances<T>;

  const ServicesContext = createContext<Instances | null>(null);

  const ServicesProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const instances = {} as Instances;
    for (const [key, factory] of Object.entries(factories)) {
      (instances as any)[key] = factory();
    }

    return (
      <ServicesContext.Provider value={instances}>
        {children}
      </ServicesContext.Provider>
    );
  };

  const useServices = (): Instances => {
    const context = useContext(ServicesContext);
    if (!context)
      throw new Error('useServices must be used within a ServiceProvider');
    return context;
  };

  return [ServicesProvider, useServices] as const;
}
