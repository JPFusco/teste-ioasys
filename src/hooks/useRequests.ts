import useGlobalContext from './useGlobalContext';

function useRequests() {
  const { authToken } = useGlobalContext();

  async function login({ email, senha: password }: { email: string, senha: string }) {
    try {
      const response = await fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      return error;
    }
  }

  async function getLivros(paginaAtual: number) {
    try {
      const response = await fetch(`https://books.ioasys.com.br/api/v1/books?amount=12&page=${paginaAtual}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      return error;
    }
  }

  return {
    login,
    getLivros,
  };
}

export default useRequests;
