"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be managed by auth context in a real app

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Karma</span>
          <span className="logo-text accent">sathi</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/marketplace" className="nav-link" onClick={() => setIsOpen(false)}>
              Marketplace
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/artisans" className="nav-link" onClick={() => setIsOpen(false)}>
              Artisans
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/micro-loans" className="nav-link" onClick={() => setIsOpen(false)}>
              Micro-Loans
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skill-development" className="nav-link" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tourism" className="nav-link" onClick={() => setIsOpen(false)}>
              Tourism
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline nav-btn"
                  onClick={() => {
                    setIsLoggedIn(false)
                    setIsOpen(false)
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

