import styled from 'styled-components';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', () => setScreenSize());

const StyledContainer = styled.div`
  width: min(100%, 430px);
  min-height: calc(var(--vh, 1vh) * 100);
  box-shadow: 0px 0px 4px var(--gray-300); /* 임시 */
  background: white;
  margin: auto;
`;

export default StyledContainer;
