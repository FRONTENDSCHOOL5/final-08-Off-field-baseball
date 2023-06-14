import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &:before {
    content: '';
    display: block;
    background: #00000030; // 임시 색
    width: min(100%, 430px);
    height: 100%;
    margin: auto;
  }
`;

export default Overlay;
