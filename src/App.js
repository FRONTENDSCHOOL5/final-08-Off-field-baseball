import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import MainLayout from './components/layout/MainLayout/MainLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Router />
      </MainLayout>
    </>
  );
}
export default App;
