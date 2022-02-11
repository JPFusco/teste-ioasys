import React, { createContext } from 'react';
import useGlobalContextProvider from '../hooks/useGlobalContextProvider';

interface IGlobalContext {
  authToken: string | undefined;
  setAuthToken: React.Dispatch<string>;
  removeAuthToken: () => void;
  nomeUsuarioLogado: string;
  setNomeUsuarioLogado: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const globalContextProvider = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={globalContextProvider}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
