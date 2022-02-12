import './style.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CardLivro from '../../components/CardLivro';
import Paginacao from '../../components/Paginacao';
import useRequests from '../../hooks/useRequests';
import ILivro from '../../interfaces/livro';
import ModalDetalhesLivro from '../../components/ModalDetalhesLivro';

function Home() {
  const livros = [
    {
      id: '8f41b92c7460b9337660427e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660426e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660425e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660424e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660423e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660422e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660421e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660420e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660429e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660428e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660437e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
    {
      id: '8f41b92c7460b9337660447e',
      title: 'A Culpa é das Estrelas',
      description: 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
      authors: [
        'Jonh Green',
      ],
      pageCount: 288,
      category: 'Romance',
      imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
      isbn10: '0062856626',
      isbn13: '978-0062856623',
      language: 'Inglês',
      publisher: 'Intrínseca',
      published: 2002,
    },
  ];
  const { getLivros } = useRequests();
  const [livrosFetch, setLivrosFetch] = useState<ILivro[]>([] as ILivro[]);
  const [modalDetalhes, setModalDetalhes] = useState(false);
  const [livroDetalhado, setLivroDetalhado] = useState<ILivro>({} as ILivro);

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
          ? livrosFetch.map((livro) => (
            <CardLivro
              livro={livro}
              key={livro.id}
              setModalDetalhes={setModalDetalhes}
              setLivroDetalhado={setLivroDetalhado}
            />
          ))
          : livros.map((livro) => (
            <CardLivro
              livro={livro}
              key={livro.id}
              setModalDetalhes={setModalDetalhes}
              setLivroDetalhado={setLivroDetalhado}
            />
          ))}
      </div>
      <Paginacao setLivrosFetch={setLivrosFetch} />
      {modalDetalhes && (
        <ModalDetalhesLivro
          livro={livroDetalhado}
          setModalDetalhes={setModalDetalhes}
        />
      )}
    </div>
  );
}

export default Home;
