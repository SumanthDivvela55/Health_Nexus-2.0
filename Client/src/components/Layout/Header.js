import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'aqua' }}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to="/">HealthNexus</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <NavLink className="nav-link " to="/"><i class="fa fa-home" /> Home</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " to="/medicine"> <i class="fa  fa-hand-holding-medical"></i>  Medicines</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " to="/labtests"> <i class="fa fa-x-ray"></i> Labtest</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " to="/doctor"><i class="fa fa-user-nurse"></i> Doctor</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link " to="/login"> <i class="fa-regular fa-user fa-beat-fade"></i> Login</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link " to="/cart"> <i class="fa-solid fa-cart-shopping"></i> Cart(0)</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header