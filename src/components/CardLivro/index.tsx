import './style.css';
import ILivro from '../../interfaces/livro';

function CardLivro({ livro }: { livro: ILivro }) {
  return (
    <div className="card-livro-container">
      <img src={livro.imageUrl} alt={`Capa do livro ${livro.title}`} />
      <div className="card-livro-info">
        <div className="card-livro-info-top">
          <h1>{livro.title}</h1>
          {livro.authors.map((autor, index) => (
            <h2 key={autor}>
              {autor}
              {index === livro.authors.length - 1 ? '' : ','}
            </h2>
          ))}
        </div>
        <div className="card-livro-info-bottom">
          <p>
            {livro.pageCount}
            {' '}
            páginas
          </p>
          <p>
            {livro.publisher}
          </p>
          <p>
            Publicado em
            {' '}
            {livro.published}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardLivro;
