import React, { useEffect } from 'react';
import TopBasicNav from '../../../components/common/TopNavBar/TopBasicNav';
import ChatListStyle from './ChatListStyle';
import ContentsLayout from '../../../components/layout/ContentsLayout/ContentsLayout';
import TabNav from '../../../components/common/TabNavBar/TabNav';
import { LOTTE_SMALL } from '../../../styles/CommonIcons';
import { SSG_SMALL } from '../../../styles/CommonIcons';
import { HANHWA_SMALL } from '../../../styles/CommonIcons';

const ChatList = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '채팅 리스트 | 구장 밖 야구';
  }, []);

  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        <ChatListStyle
          profile={LOTTE_SMALL}
          userName='최강롯데'
          lastChat='사진을 보냈습니다.'
          date='2023.06.08'
          isNew={true}
          navigate='/chat/user1'
        />
        <ChatListStyle
          profile={SSG_SMALL}
          userName='MSG랜더스'
          lastChat='재밌게 보고 와~'
          date='2023.06.12'
          isNew={true}
          navigate='/chat/user2'
        />
        <ChatListStyle
          profile={HANHWA_SMALL}
          userName='여기한화하나요'
          lastChat='네 그럼 내일 뵐게요!!'
          date='2023.06.15'
          navigate='/chat/user3'
        />
      </ContentsLayout>
      <TabNav currentId={1} />
    </>
  );
};

export default ChatList;
