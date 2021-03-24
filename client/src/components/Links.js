import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo";
import theme from "./theme";

const StyledNavbar = styled(Navbar.Brand)`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

const StyledNav = styled(Nav)`
  margin-left: 100px;
`;

export default function Links(props) {
  return (
    <>
      <StyledNavbar href="/">
        <Logo />
        <span>Movie Board</span>
      </StyledNavbar>
      <StyledNav className="mr-auto">
        <Nav.Link href="/movies/list">Movies List</Nav.Link>
        <Nav.Link href="/movies/create">Create</Nav.Link>
      </StyledNav>
    </>
  );
}
