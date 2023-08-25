import { programTypes } from '@/assets/static-data/programTypes';
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type Page = (typeof programTypes)[number];

type ActivePageContextProviderProps = {
  children: ReactNode;
};

type ActivePageContextType = {
  activePage: Page | null;
  setActivePage: Dispatch<SetStateAction<Page | null>>;
};

export const ActivePageContext = createContext<ActivePageContextType | null>(
  null
);

export default function ActivePageContextProvider({
  children,
}: ActivePageContextProviderProps) {
  const [activePage, setActivePage] = useState<Page | null>(null);

  return (
    <ActivePageContext.Provider
      value={{
        activePage,
        setActivePage,
      }}>
      {children}
    </ActivePageContext.Provider>
  );
}

export function useActivePageContext() {
  const context = useContext(ActivePageContext);

  return context;
}
