function useRequests() {
  async function login({ email, senha: password }: { email: string, senha: string }) {
    const response = await fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return { response, data };
  }

  return {
    login,
  };
}

export default useRequests;
