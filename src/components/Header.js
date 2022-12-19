import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://image.similarpng.com/very-thumbnail/2021/07/Restaurant-logo-on-transparent-background-PNG.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        New York Food Site
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header