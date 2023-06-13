import { BASIC_PROFILE_LG } from '../../styles/CommonIcons';
import styled from 'styled-components';
import StyledSelect from '../../components/common/Select/Select';
import Form from '../../components/common/Form/Form';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';

export default function JoinProfile({ team }) {
  const teamList = [
    '삼성 라이온즈',
    '한화 이글스',
    '키움 히어로즈',
    '롯데 자이언츠',
    'LG 트윈스',
    'KIA 타이거즈',
    'SSG 랜더스',
    '두산 베어스',
    'NC 다이노스',
    'KT 위즈',
  ];
  const handelForm = () => {};
  return (
    <StyledJoinProfile>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <StyledImg src={BASIC_PROFILE_LG} alt='' />
      <Form team={team} handelForm={handelForm}>
        <label htmlFor='email-inp'>사용자 이름</label>
        <input id='email-inp' type='text' />
        <label htmlFor='password-inp'>계정 ID</label>
        <input id='password-inp' type='text' />
        <label htmlFor='introduce-inp'>소개</label>
        <input id='introduce-inp' type='text' />
        <label htmlFor='myTeam-btn'>응원 중인 팀</label>
        <StyledSelect optionTextList={teamList}></StyledSelect>
        <Link to='/'>
          <Button id='start-btn' type='submit'>
            감귤마켓 시작하기
          </Button>
        </Link>
      </Form>
    </StyledJoinProfile>
  );
}

const StyledJoinProfile = styled.section`
  padding: 30px 34px;

  h1,
  p {
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
  #myTeam-btn {
    margin-top: 9px;
  }
  #start-btn {
    margin-top: 30px;
  }
`;
const StyledImg = styled.img`
  width: 110px;
  aspect-ratio: 1/1;
  margin: 0 auto 30px;
`;
