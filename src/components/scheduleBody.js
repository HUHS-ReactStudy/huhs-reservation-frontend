/* eslint-disable */
import styled from 'styled-components';
import Content from './scheduleContent';
const MainBody = styled.div`
  margin: auto;
  width: 423px;
`;

const Box = styled.body`
  background: #dbdbdb;
  height: 844px;
  width: 423px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentTitle = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-top: 20px;
  gap: 27px;
  width: 390px;
  height: 52px;
  left: 2px;
  top: 26px;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
`;

const Schedule = () => {
  return (
    <MainBody>
      <Box>
        <ContentTitle>
          <div>취소</div>
          <div>일정등록</div>
          <div>저장</div>
        </ContentTitle>
        <Content />
        <Content />
        <Content />
        <Content />
      </Box>
    </MainBody>
  );
};

export default Schedule;
