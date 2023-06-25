import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import StyledContainer from './components/layout/StyledContainer';
import UserProvider from './context/UserContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <StyledContainer>
          <Router />
        </StyledContainer>
      </UserProvider>
    </>
  );
}
export default App;
