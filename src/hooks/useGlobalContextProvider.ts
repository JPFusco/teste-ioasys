import { useLocalStorage } from 'react-use';
import { useState } from 'react';

function useGlobalContextProvider() {
  const [authToken, setAuthToken, removeAuthToken]
    : [string | undefined, React.Dispatch<string>, () => void] = useLocalStorage('authToken');
  const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState<string>('');
  return {
    authToken,
    setAuthToken,
    removeAuthToken,
    nomeUsuarioLogado,
    setNomeUsuarioLogado,
  };
}

export default useGlobalContextProvider;
