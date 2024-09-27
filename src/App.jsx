
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <nav className="navbar navbar-expand bg-secondary rounded">
      <div className="container">
      <a className="navbar-brand" href="#">
      <img src="./iconeatacadocemsvg.svg" alt="Logo" width="35" height="50"/>
      a.c.m
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Início</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Produtos</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Carrinho</a>
        </li>
        </ul>
    <form className="d-flex mx-auto" role="search">
        <input className="form-control me-2 m-2" type="search" placeholder="Pesquisar..." aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit" img src = "./search.svg"> </button>
      </form>
      </div>
      </div>
      </nav>
  );
};

export default App;