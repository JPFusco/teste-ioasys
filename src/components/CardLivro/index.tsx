/* eslint-disable jsx-a11y/no-static-element-interactions */
import './style.css';
import ILivro from '../../interfaces/livro';

function CardLivro({ livro, setModalDetalhes, setLivroDetalhado }
  : {
    livro: ILivro,
    setModalDetalhes: React.Dispatch<React.SetStateAction<boolean>>,
    setLivroDetalhado: React.Dispatch<React.SetStateAction<ILivro>>
  }) {
  const handleAbrirModal = () => {
    setLivroDetalhado(livro);
    setModalDetalhes(true);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={handleAbrirModal} className="card-livro-container">
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
