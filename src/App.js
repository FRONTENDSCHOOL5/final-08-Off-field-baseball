import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import MainLayout from './components/layout/MainLayout/MainLayout';
import UserProvider from './context/UserContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <MainLayout>
          <Router />
        </MainLayout>
      </UserProvider>
    </>
  );
}
export default App;
