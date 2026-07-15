import { createContext, useContext, type ReactNode } from "react";

interface TransitionContextType {
  startResults: () => void;
  diving: boolean;
}

export const TransitionContext = createContext<TransitionContextType>({
  startResults: () => {},
  diving: false,
});

export function useTransition() {
  return useContext(TransitionContext);
}

interface TransitionProviderProps {
  children: ReactNode;
  onStartResults: () => void;
  diving: boolean;
}

export function TransitionProvider({ children, onStartResults, diving }: TransitionProviderProps) {
  return (
    <TransitionContext.Provider value={{ startResults: onStartResults, diving }}>
      {children}
    </TransitionContext.Provider>
  );
}
