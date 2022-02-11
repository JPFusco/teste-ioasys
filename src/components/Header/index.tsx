import './style.css';
import LogoBlack from '../../assets/logo-black.svg';
import IconeLogout from '../../assets/icone-logout.svg';
import useGlobalContext from '../../hooks/useGlobalContext';

function Header() {
  const { removeAuthToken, nomeUsuarioLogado } = useGlobalContext();

  const handleLogout = () => {
    removeAuthToken();
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={LogoBlack} alt="Logo ioasys" />
        <span>Books</span>
      </div>
      <div className="header-right">
        <span>
          Bem vindo,
          {' '}
          <strong>
            {nomeUsuarioLogado}
            !
          </strong>
        </span>
        <button type="button" onClick={handleLogout}>
          <img src={IconeLogout} alt="Logout" />
        </button>
      </div>
    </div>
  );
}

export default Header;
