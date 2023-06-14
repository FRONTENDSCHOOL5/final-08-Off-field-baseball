import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  background: #00000040; // 임시 색
  top: 0;
  bottom: 0;
  width: inherit;
  z-index: 1000;
`;

export default Overlay;
