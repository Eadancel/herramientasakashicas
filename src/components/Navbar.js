import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/home.svg'

const Navbar = () => (
  <nav className="navbar is-transparent" style={{backgroundColor:'transparent'}}>

    <div className="container">
      <div className="navbar-brand" style={{alignItems:'end'}}>
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Inicio" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start" style={{alignItems:'end'}}>

      <div className="navbar-item">
        <div className="field">
          <Link to="/about">
            Biograf&iacute;a
          </Link>

          <Link className="navbar-item" to="/about">
            Testimonios
          </Link>
          <Link className="navbar-item" to="/about">
            Videos
          </Link>
        </div>
      </div>

      <div className="navbar-item">
        <div className="field">
          <Link to="/about">
            Servicios
          </Link>

          <Link className="navbar-item" to="/about">
            Talleres
          </Link>
          <Link className="navbar-item" to="/products">
            Productos
          </Link>
        </div>
      </div>
      <Link className="navbar-item" to="/about">
            Agendas y Talleres
          </Link>
      </div>
      <div className="navbar-end" style={{alignItems:'end'}}>
        <Link className="navbar-item" to="/products">
          Contacto
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
