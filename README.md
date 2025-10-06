# react-di-lite

> **Lightweight, hierarchical dependency injection for React — inspired by Angular’s services.**

---

## 📖 Description

React Service Provider offers a simple and powerful way to manage shared state and logic across your React application.

It brings Angular-like service patterns into React — enabling **hierarchical dependency injection** and **shared instances** across your component tree.

---

## ⚙️ Prerequisites

- **React**: `^17.0.0` or higher
- **TypeScript** (recommended): for full IntelliSense and type safety

---

## 📦 Installation

```bash
npm install react-di-lite
# or
yarn add react-di-lite
```

---

## 🧩 How It Works

Think of it like a **React hook**, but with **shared state** — allowing multiple components to access and modify the same service instance.

1. Global services provider

```tsx
// src/services/CounterService.tsx
import { useState } from 'react';

export const CounterService = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return { count, increment };
};

// src/services/index.ts
import { createServicesProvider } from 'react-di-lite';
import { CounterService } from './CounterService';

// name these whatever suits you
export const [GlobalServicesProvider, useGlobalServices] =
  createServicesProvider({
    counterService: CounterService,
  });

// src/App.tsx
import { GlobalServicesProvider } from './services';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';

function App() {
  return (
    <GlobalServicesProvider>
      <Component1 />
      <Component2 />
    </GlobalServicesProvider>
  );
}

// src/components/Component1.tsx
import { useGlobalServices } from '../services';
export const Component1 = () => {
  const { counterService } = useGlobalServices();
};

// src/components/Component2.tsx
import { useGlobalServices } from '../services';
export const Component2 = () => {
  const { counterService } = useGlobalServices();
};
```

##### 🎥 Demo Video

Notice shared state

![Demo of global services provider](https://github.com/zobla-kv/react-di-lite/blob/master/assets/demo-global.gif?raw=true)

2. Multiple services providers

```tsx
// src/services/index.ts
import { createServicesProvider } from 'react-di-lite';
import { CounterService } from './CounterService';

// name these whatever suits you
export const [GlobalServicesProvider, useGlobalServices] =
  createServicesProvider({
    counterService: CounterService,
    ...
  });
export const [ChatServicesProvider, useChatServices] = createServicesProvider({
  counterService: CounterService,
  ...
});

// src/App.tsx
import { GlobalServicesProvider, ChatServicesProvider } from './services';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';

function App() {
  return (
    <GlobalServicesProvider>
      <Component1 />
      <ChatServicesProvider>
        <Component2 />
      </ChatServicesProvider>
    </GlobalServicesProvider>
  );
}

// src/components/Component1.tsx
import { useGlobalServices } from '../services';
export const Component1 = () => {
  const { counterService } = useGlobalServices();
};

// src/components/Component2.tsx
import { useChatServices } from '../services';
export const Component2 = () => {
  const { counterService } = useChatServices();
};
```

##### 🎥 Demo Video

Notice separate state

![Demo of multiple services providers](https://github.com/zobla-kv/react-di-lite/blob/master/assets/demo-multiple.gif?raw=true)

---

## 💪 Fully Typed

Built entirely with **TypeScript**, the library provides:

- Full **IntelliSense** support in your IDE
- Automatic type inference for injected services

##### 🎥 Demo Video

Notice separate state

![Demo of typescript](https://github.com/zobla-kv/react-di-lite/blob/master/assets/demo-typescript.gif?raw=true)

---
