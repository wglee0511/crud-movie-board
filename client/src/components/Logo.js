import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import theme from "./theme";

const StylrdFAS = styled(FontAwesomeIcon)`
  color: ${theme.mainRedColor};
  font-size: 70px;
`;
export default function Logo(props) {
  return <StylrdFAS icon={faVideo} />;
}
