import styled from 'styled-components';
import { memo } from 'react';

const TotalBox = styled.div`
  margin-top: 40px;
  textarea {
    border-radius: 10px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    outline: none;
  }
`;

const GroupBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 380px;
  height: 30px;
  background: #ffffff;
  justify-content: space-between;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  & span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
  & + & {
    margin-top: 0px;
  }
  &.first {
    border-radius: 10px 10px 0px 0px;
    border-bottom: 2px solid rgba(115, 119, 123, 0.3);
  }
  &.second {
    border-top: 2px solid rgba(115, 119, 123, 0.3);
    border-radius: 0px 0px 10px 10px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
`;

const DetailContentBox = () => {
  return (
    <TotalBox>
      <textarea rows={8} cols={48} placeholder="상세내용" />
    </TotalBox>
  );
};

const ThirdContentBox = memo(() => {
  return (
    <>
      <TotalBox>
        <GroupBox className="first">
          <span>이름</span>
          <Input placeholder="이름을 입력해주세요" />
        </GroupBox>
        <GroupBox>
          <span>학번</span>
          <Input placeholder="학번을 입력해주세요" />
        </GroupBox>
        <GroupBox className="second">
          <span>학과</span>
          <Input placeholder="학과를입력해주세요" />
        </GroupBox>
      </TotalBox>
      <DetailContentBox />
    </>
  );
});

export default ThirdContentBox;
