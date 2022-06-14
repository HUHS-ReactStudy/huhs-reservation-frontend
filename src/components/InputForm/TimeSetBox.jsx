import styled from 'styled-components';
import React, { useContext } from 'react';
import { GroupBox } from './PurposeBox';
import EditContext from './CreateContext';
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
// 시작, 종료 시간을 입력하는 input태그
const DateInput = styled.input`
  font-weight: 500;
  font-size: 13px;
  width: 179px;
  height: 19px;
  color: #73777b;
`;

const TimeSetBox = () => {
  const {
    state: { timeSet },
    actions: { setTimeSet },
  } = useContext(EditContext);

  const timeSetChange = e => {
    setTimeSet({ ...timeSet, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <GroupBoxUp className="underLine topBox">
        <section>
          <span>시작</span>
          <DateInput
            name="start"
            type="datetime-local"
            value={timeSet.start}
            onChange={timeSetChange}
          />
        </section>
      </GroupBoxUp>
      <GroupBoxUp className="bottomBox">
        <section>
          <span>종료</span>
          <DateInput
            name="end"
            type="datetime-local"
            value={timeSet.end}
            onChange={timeSetChange}
          />
        </section>
      </GroupBoxUp>
    </div>
  );
};

export default TimeSetBox;
export { GroupBoxUp };
