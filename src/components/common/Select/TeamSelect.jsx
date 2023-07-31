import React from 'react';
import Select from './Select';

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
  '없음',
];

// selectedOpt, setSelectedOpt : 선택한 옵션을 저장하는 useState
const TeamSelect = ({ selectedOpt, setSelectedOpt, selectedTeam }) => {
  return (
    <>
      <label htmlFor='my-team'>
        응원 중인 팀<span className='a11y-hidden'>선택하기</span>
      </label>
      <Select
        btnTxt='응원 중인 팀을 선택해주세요'
        btnId='my-team'
        optionTextList={teamList}
        selectedOpt={selectedOpt}
        setSelectedOpt={setSelectedOpt}
        selectedTeam={selectedTeam}
      ></Select>
    </>
  );
};

export default TeamSelect;
