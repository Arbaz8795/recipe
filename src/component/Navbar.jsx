import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
// import {CiHeart} from "react-icons/ci"

const Navbar = () => {
  let navigate = useNavigate()
  const handleClick = () => {
    navigate('/wishlist', { state: "arbaz" })

  }
  return (
    <div>
      <nav style={{ right: "0", left: "0" }} className="navbar position-fixed z-index-1  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><IoFastFoodOutline color='black' /> Food finder</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/wishlist"><CiHeart color='red' size={"30"}/><sup>0</sup>  Wishlist</Link>
        </li> */}

            </ul>
            <li onClick={handleClick} style={{ listStyle: "none", cursor: "pointer" }}>Wishlist  <FaHeart color='blue' /><sup>0</sup> </li>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
