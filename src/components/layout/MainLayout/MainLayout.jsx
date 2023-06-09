import styled from 'styled-components';

export default function MainLayout({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}

const MainWrapper = styled.main`
  width: min(100%, 430px);
  min-height: 100vh;
  box-shadow: 0px 0px 4px var(--gray-300); /* 임시 */
  background: white;
  margin: auto;
`;
