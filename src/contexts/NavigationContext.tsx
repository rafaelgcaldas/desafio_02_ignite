import { createContext, ReactNode } from 'react';

type NavigationContextProviderProps = {
  children: ReactNode;
}

export const NavigationContext = createContext({});

export function NavigationContextProvider({ children }: NavigationContextProviderProps) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}