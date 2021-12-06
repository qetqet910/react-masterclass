import styled from "styled-components"

const Screen = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  min-height: 100vh;
  background: ${prop => prop.theme.backgroundColor};
`
const Text = styled.span`
  color: ${prop => prop.theme.textColor};
  font-size: 2rem;
`

function App() {
  return (
    <Screen>
      <Text>Hello</Text>
    </Screen>
  );
}

export default App;
