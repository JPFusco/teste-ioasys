import { useLocalStorage } from 'react-use';
import { useState } from 'react';
import useRequests from './useRequests';
import ILivro from '../interfaces/livro';

function useGlobalContextProvider() {
  const { getLivros } = useRequests();

  const [authToken, setAuthToken, removeAuthToken]
    : [string | undefined, React.Dispatch<string>, () => void] = useLocalStorage('authToken');
  const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState<string>('');

  const atualizarLivros = async (
    paginaAtual: number,
    setLivros: React.Dispatch<React.SetStateAction<ILivro[]>>,
  ) => {
    const novosLivros = await getLivros(paginaAtual);

    if (novosLivros.errors) {
      console.log(novosLivros);
    }

    setLivros(novosLivros);
  };

  return {
    authToken,
    setAuthToken,
    removeAuthToken,
    nomeUsuarioLogado,
    setNomeUsuarioLogado,
    atualizarLivros,
  };
}

export default useGlobalContextProvider;
