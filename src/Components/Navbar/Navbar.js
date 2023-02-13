import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <section class="fixed-top navigation">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <Link class="navbar-brand" to='/'><img src="images/logo.png" alt="logo"/></Link>
      <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse text-center" id="navbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to='/'>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link page-scroll" to=''>Feature</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to=''>About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/services'>Service</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link page-scroll" to=''>Team</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link page-scroll" to=''>Pricing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/contact'>Contact</Link>
          </li>
        </ul>
        <Link href="#" class="btn btn-primary ml-lg-3 primary-shadow">Try Free</Link>
      </div>
    </nav>
  </div>
</section>
    </>
  )
}

export default Navbar
