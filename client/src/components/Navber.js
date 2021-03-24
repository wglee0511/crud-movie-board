import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Links from "./Links";

const StyledNavbar = styled(Navbar)`
  margin: 0 15% 0 15%;
`;

export default function Navibar(props) {
  return (
    <StyledNavbar bg="dark" variant="dark">
      <Links />
    </StyledNavbar>
  );
}
