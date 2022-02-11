import './style.css';
import Header from '../../components/Header';
import CardLivro from '../../components/CardLivro';
import Paginacao from '../../components/Paginacao';

function Home() {
  const livros = [{
    id: '1',
    title: 'A Culpa é das Estrelas',
    authors: ['John Green'],
    pageCount: 288,
    imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
    publisher: 'Intrínseca',
    published: 2002,
  }];

  return (
    <div className="home-container">
      <Header />
      {livros.map((livro) => <CardLivro livro={livro} key={livro.id} />)}
      <Paginacao />
    </div>
  );
}

export default Home;
