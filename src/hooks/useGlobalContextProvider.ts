import { useLocalStorage } from 'react-use';

function useGlobalContextProvider() {
  const [authToken, setAuthToken, removeAuthToken]
    : [string | undefined, React.Dispatch<string>, () => void] = useLocalStorage('authToken');

  return {
    authToken,
    setAuthToken,
    removeAuthToken,
  };
}

export default useGlobalContextProvider;
