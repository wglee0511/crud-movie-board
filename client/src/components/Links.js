import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo";
import { LinkContainer } from "react-router-bootstrap";

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
      <StyledNavbar>
        <Logo />
        <span>Movie Board</span>
      </StyledNavbar>
      <StyledNav className="mr-auto">
        <LinkContainer to="/movie/list">
          <Nav.Link>Movies List</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/movie/create">
          <Nav.Link>Create</Nav.Link>
        </LinkContainer>
      </StyledNav>
    </>
  );
}
