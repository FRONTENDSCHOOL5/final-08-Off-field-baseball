import styled from "styled-components";

const StyledSelect = styled.div`
  .btn-select{
    width: 100%;
    border-radius: 8px;
    padding: 9px 14px 9px 13px;
    text-align: left;
    font-size: 1.4rem;
    border: 1px solid var(--primary-color);
  }
  ul {
    margin-top: 8px;
    box-shadow: 0px 0px 5px var(--gray-300);
    font-size: 1.4rem;
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
  }
  ul button {
    padding: 9px 14px;
    width: 100%;
    text-align: left;
  }
  /* 현재 선택된 옵션 */
  .selected-option {
    background: var(--gray-100);
  }
`

function Select({children, id}) {
  return (
    // label 태그 for과 연결할 id입니다
    <StyledSelect id={id} class="custom-select">
      {children}
    </StyledSelect>
  );
}

export default Select;