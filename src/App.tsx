import React from "react";
import styled from "styled-components";

function App() {

  const Div = styled.div`
    background-color: ${props => props.theme.backgroundColor}
  `
  const H1 = styled.h1`
    color: ${props => props.theme.textColor}
  `

  return (
    <Div>
      <H1>asdasdasdasdasd</H1>
    </Div>
  );
}

export default App;
