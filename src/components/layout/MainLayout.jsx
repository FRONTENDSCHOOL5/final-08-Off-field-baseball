import React from "react";
import styled from "styled-components";

const MainLayout = styled.main`
  width: min(100%, 430px);
  flex-grow: 1;
  box-shadow: 0px 0px 4px var(--gray-300); /* 임시 */
  background: white;
  margin: auto;
`;

export default MainLayout;