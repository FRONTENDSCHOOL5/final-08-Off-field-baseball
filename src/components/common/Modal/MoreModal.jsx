import Overlay from './Overlay';
import styled from 'styled-components';

const MoreModal = ({ menuList }) => {
  return (
    <Overlay>
      <StyledDialog
        open
        role='dialog'
        aria-labelledby='title-dialog'
        aria-describedby='desc-txt'
      >
        <ul>
          {menuList.map((menu) => {
            return (
              <li>
                <button type='button'>{menu}</button>
              </li>
            );
          })}
        </ul>
      </StyledDialog>
    </Overlay>
  );
};

export default MoreModal;

MoreModal.defaultProps = {
  menuList: ['신고'],
};

const StyledDialog = styled.dialog`
  position: fixed;
  bottom: 0;
  width: min(100%, 430px);
  border: none;
  padding: 0;
  border-radius: 10px 10px 0 0;

  ul::before {
    display: block;
    content: '';
    margin: 16px auto;
    width: 50px;
    height: 4px;
    background-color: var(--gray-200);
    border-radius: 2px;
  }
  li > button {
    padding: 14px 26px;
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: left;
  }
`;
