import MainLayout from '../../components/layout/MainLayout';
import {BASIC_PROFILE_LG} from '../../styles/CommonIcons'
import Form from '../../components/common/form/Form';
import styled from "styled-components";
import StyledSelect from "../../components/common/select/Select";

const StyledJoinProfile = styled(MainLayout)`
  padding: 30px 34px;

  h1, p {
    text-align: center;
  }
  h1 {
    margin-bottom: 12px;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3rem;
  }
  p {
    margin-bottom: 30px;
    font-size: 1.4rem;
    color: var(--gray-400);
  }
`
const StyledImg = styled.img`
  width: 110px;
  aspect-ratio: 1/1;
  margin: 0 auto 30px;
`
function JoinProfile({team}) {
  const handelForm = () => {

  }
  return (
    <StyledJoinProfile>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <StyledImg src={BASIC_PROFILE_LG} alt="" />
      <Form team={team} handelForm={handelForm}>
        <label htmlFor="email-inp">사용자 이름</label>
        <input id="email-inp" type="text"/>
        <label htmlFor="password-inp">계정 ID</label>
        <input id="password-inp" type="text"/>
        <label htmlFor="introduce-inp">소개</label>
        <input id="introduce-inp" type="text"/>
        <label htmlFor="myTeam">응원 중인 팀</label>
        <StyledSelect id='myTeam'>
          <button class="btn-select">삼성 라이온즈</button>
          <ul>
            <li><button class="selected-option" type="button">삼성 라이온즈</button></li>
            <li><button type="button">한화 이글스</button></li>
            <li><button type="button">키움 히어로즈</button></li>
            <li><button type="button">롯데 자이언츠</button></li>
            <li><button type="button">LG 트윈스</button></li>
            <li><button type="button">KIA 타이거즈</button></li>
            <li><button type="button">SSG 랜더스</button></li>
            <li><button type="button">두산 베어스</button></li>
            <li><button type="button">NC 다이노스</button></li>
            <li><button type="button">KT 위즈</button></li>
          </ul>
        </StyledSelect>
        <button type="submit">감귤마켓 시작하기</button>
      </Form>
    </StyledJoinProfile>
  );
}

export default JoinProfile;