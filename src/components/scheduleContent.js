/* eslint-disable */
import styled from 'styled-components';

const Box = styled.input`
  border: none;
`;
const ColorBox = styled.span`
  width: 16px;
  height: 16px;
  background: #f8dc81;
  display: inline-block;
  margin-right: 5px;
  border-radius: 10px;
`;

const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 400px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 30px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  & input {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
  }
`;
const Content = () => {
  return (
    <GroupBox>
      <div>
        <ColorBox />
        <Box placeholder="동아리방 사용 목적" />
      </div>
    </GroupBox>
  );
};

export default Content;
