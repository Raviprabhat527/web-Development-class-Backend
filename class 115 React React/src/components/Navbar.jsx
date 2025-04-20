import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <link to="/"><li>Home</li></link>
        <link to="/about"><li>About</li></link>
        <link to="/login"><li>Login</li></link>
      </nav>
    </div>
  )
}

export default Navbar
