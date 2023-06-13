import React from 'react';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import ChatListStyle from './ChatListStyle';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';

const ChatList = () => {
  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        <ChatListStyle
          userName='애월읍 위니브 감귤농장'
          lastChat='이번엔 정정 언제하맨마씸?'
          date='2023.06.08'
        />
        <ChatListStyle
          userName='제주감귤마을'
          lastChat='깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지'
          date='2023.06.12'
        />
        <ChatListStyle
          userName='누구네 농장 친환경 한라봉'
          lastChat='내 차는 내가 평가한다. 오픈 이벤트에 참여합니다.'
          date='2023.06.15'
        />
      </ContentsLayout>
    </>
  );
};

export default ChatList;
