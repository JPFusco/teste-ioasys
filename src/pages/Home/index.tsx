import './style.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CardLivro from '../../components/CardLivro';
import Paginacao from '../../components/Paginacao';
import useRequests from '../../hooks/useRequests';
import ILivro from '../../interfaces/livro';

function Home() {
  const livros = [
    {
      id: '1',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '2',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '3',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '4',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '5',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '6',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '7',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '9',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '10',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '11',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '12',
      title: 'A Culpa é das Estrelas',
      authors: ['John Green'],
      pageCount: 288,
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      publisher: 'Intrínseca',
      published: 2002,
    },
  ];
  const { getLivros } = useRequests();
  const [livrosFetch, setLivrosFetch] = useState<ILivro[]>([] as ILivro[]);

  useEffect(() => {
    async function livrosIniciais() {
      const resposta = await getLivros(1);

      if (resposta.errors) {
        return console.log(resposta.errors);
      }

      return setLivrosFetch(resposta);
    }

    livrosIniciais();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="livros-container">
        {livrosFetch.length > 0
          ? livrosFetch.map((livro) => <CardLivro livro={livro} key={livro.id} />)
          : livros.map((livro) => <CardLivro livro={livro} key={livro.id} />)}
      </div>
      <Paginacao setLivrosFetch={setLivrosFetch} />
    </div>
  );
}

export default Home;
