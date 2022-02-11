import './style.css';
import React, { useState } from 'react';
import IconeMudarPagina from '../../assets/icone-mudar-pagina.svg';
import useGlobalContext from '../../hooks/useGlobalContext';
import ILivro from '../../interfaces/livro';

function Paginacao({ setLivrosFetch }
  : { setLivrosFetch: React.Dispatch<React.SetStateAction<ILivro[]>> }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const maxPaginas = 10; // O valor real seria response.totalPages do fetch inicial
  const { atualizarLivros } = useGlobalContext();

  const handlePaginaAnterior = async () => {
    if (paginaAtual === 1) {
      setPaginaAtual(1);
    } else {
      setPaginaAtual(paginaAtual - 1);
      await atualizarLivros(paginaAtual - 1, setLivrosFetch);
    }
  };

  const handlePaginaSeguinte = async () => {
    if (paginaAtual === maxPaginas) {
      setPaginaAtual(maxPaginas);
    } else {
      setPaginaAtual(paginaAtual + 1);
      await atualizarLivros(paginaAtual + 1, setLivrosFetch);
    }
  };

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
