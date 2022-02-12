import ILivro from '../../interfaces/livro';
import './style.css';
import IconeFechar from '../../assets/icone-fechar.svg';
import IconeAspas from '../../assets/icone-aspas.svg';

function ModalDetalhesLivro({ livro, setModalDetalhes }
  : { livro: ILivro, setModalDetalhes: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleFecharModal = () => {
    setModalDetalhes(false);
  };

  return (
    <div className="backdrop-modal">
      <div className="modal-detalhes-livro-container">
        <div className="modal-left">
          <img src={livro.imageUrl} alt="Capa do livro" />
        </div>
        <div className="modal-right">
          <div className="modal-right-top">
            <h1>{livro.title}</h1>
            {livro.authors.map((autor, index) => (
              <h2 key={autor}>
                {autor}
                {index === livro.authors.length - 1 ? '' : ','}
              </h2>
            ))}
          </div>
          <div className="modal-right-middle">
            <h2>INFORMAÇÕES</h2>
            <div className="informacao">
              <span>Páginas</span>
              <span className="text-faded">
                {livro.pageCount}
                {' '}
                páginas
              </span>
            </div>
            <div className="informacao">
              <span>Editora</span>
              <span className="text-faded">
                {livro.publisher}
              </span>
            </div>
            <div className="informacao">
              <span>Publicação</span>
              <span className="text-faded">
                {livro.published}
              </span>
            </div>
            <div className="informacao">
              <span>Idioma</span>
              <span className="text-faded">
                {livro.language}
              </span>
            </div>
            <div className="informacao">
              <span>Título Original</span>
              <span className="text-faded">
                {livro.title}
              </span>
            </div>
            <div className="informacao">
              <span>ISBN-10</span>
              <span className="text-faded">
                {livro.isbn10}
              </span>
            </div>
            <div className="informacao">
              <span>ISBN-13</span>
              <span className="text-faded">
                {livro.isbn13}
              </span>
            </div>
          </div>
          <div className="modal-right-bottom">
            <h2>RESENHA DA EDITORA</h2>
            <p>
              <img src={IconeAspas} alt="Abre aspas" />
              {livro.description}
            </p>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleFecharModal}>
        <img src={IconeFechar} alt="Fechar modal" />
      </button>
    </div>
  );
}

export default ModalDetalhesLivro;
