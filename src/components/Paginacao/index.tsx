import './style.css';
import { useState } from 'react';
import IconeMudarPagina from '../../assets/icone-mudar-pagina.svg';

function Paginacao() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const maxPaginas = 10;

  const handlePaginaAnterior = () => (
    paginaAtual === 1 ? setPaginaAtual(paginaAtual) : setPaginaAtual(paginaAtual - 1)
  );

  const handlePaginaSeguinte = () => (
    paginaAtual === maxPaginas ? setPaginaAtual(paginaAtual) : setPaginaAtual(paginaAtual + 1)
  );

  return (
    <div className="paginacao-container">
      <div className="paginacao-paginas">
        Página
        {' '}
        <strong>{paginaAtual}</strong>
        {' '}
        de
        {' '}
        <strong>{maxPaginas}</strong>
      </div>
      <div className="paginacao-botoes">
        <button type="button" onClick={handlePaginaAnterior}>
          <img className={`btn-esquerda ${paginaAtual === 1 ? 'btn-inativo' : ''}`} src={IconeMudarPagina} alt="Página Anterior" />
        </button>
        <button type="button" onClick={handlePaginaSeguinte}>
          <img className={paginaAtual === maxPaginas ? 'btn-inativo' : ''} src={IconeMudarPagina} alt="Página Seguinte" />
        </button>
      </div>
    </div>
  );
}

export default Paginacao;
