import React from 'react';
import styled from 'styled-components';
import { GroupBoxUp } from './TimeSetBox';
// 이름, 학번, 학과를 입력하는 input태그입니다.
const InformationInput = styled.input`
  font-size: 14px;
  text-align: right;
`;
// 상세내용을 작성하는 textarea태그입니다.
const DetailContentBox = styled.textarea`
  width: 358px;
  height: 110px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 32px;
  padding: 10px;
  outline: none;
  resize: none;
  font-size: 14px;
  font-weight: 350px;
  border: none;
`;

const InformationBox = React.memo(function informationBox() {
  return (
    <div>
      <GroupBoxUp className="underLine topBox">
        <section>
          <span>이름</span>
          <InformationInput placeholder="이름을 입력해주세요" />
        </section>
      </GroupBoxUp>
      <GroupBoxUp className="underLine">
        <section>
          <span>학번</span>
          <InformationInput placeholder="학번을 입력해주세요" />
        </section>
      </GroupBoxUp>
      <GroupBoxUp className="bottomBox">
        <section>
          <span>학과</span>
          <InformationInput placeholder="학과를입력해주세요" />
        </section>
      </GroupBoxUp>
      <DetailContentBox placeholder="상세내용" />
    </div>
  );
});

export default InformationBox;
