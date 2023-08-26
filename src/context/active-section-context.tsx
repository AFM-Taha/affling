import { programTypes } from '@/assets/static-data/programTypes';
import {
  useState,
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';

type PageName = (typeof programTypes)[number];

type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

type ActiveSectionContextType = {
  activeSection: PageName;
  setActiveSection: Dispatch<SetStateAction<PageName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<PageName>('' as PageName);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
}
