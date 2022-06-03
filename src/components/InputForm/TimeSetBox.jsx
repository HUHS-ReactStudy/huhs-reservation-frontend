import styled from 'styled-components';
import React from 'react';
import { GroupBox } from './PurposeBox';
//  GroupBox스타일 컴포넌트 기능을 확장하기 위해서 사용
const GroupBoxUp = styled(GroupBox)`
  &input {
    font-weight: 500;
  }
  section {
    width: 100%;
    justify-content: space-between;
  }
`;
// 시작, 종료 입력 input태그
const DateInput = styled.input`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  width: 179px;
  height: 19px;
  color: #73777b;
`;

const TimeSetBox = function timeSetBox() {
  return (
    <div>
      <GroupBoxUp className="underLine topBox">
        <section>
          <span>시작</span>
          <DateInput type="datetime-local" />
        </section>
      </GroupBoxUp>
      <GroupBoxUp className="bottomBox">
        <section>
          <span>종료</span>
          <DateInput type="datetime-local" />
        </section>
      </GroupBoxUp>
    </div>
  );
};

export default TimeSetBox;
export { GroupBoxUp };
