import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  // const [logout, setLogout] = useState(false);

  // const signOutHandler = async () => {
  //   try {
  //     await Auth.signOut();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   // Acessa a sessão do usuário no cliente
  //   Auth.currentAuthenticatedUser()
  //     .then((user) => {
  //       console.log("User: ", user);
  //       setLogout(true);
  //     })
  //     .catch((err) => setLogout(false));
  // }, []);

  return (
    <Navbar
      className="header"
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="sm"
      fixed
    >
      <Link href="/" passHref>
        <Navbar.Brand>CULTURE WITHOUT BORDERS</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Item className="ml-auto">
            <Link href="/" passHref>
              <Nav.Link className="header__item">Home</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link className="header__item">Movies</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link className="header__item">Countries</Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
