import React, { useContext } from 'react';
import styled from 'styled-components';
import { GroupBoxUp } from './TimeSetBox';
import EditContext from './CreateContext';

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

const InformationBox = () => {
  const {
    state: { information },
    actions: { setInformation },
  } = useContext(EditContext);

  const formChange = e => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <GroupBoxUp className="underLine topBox">
        <section>
          <span>이름</span>
          <InformationInput
            name="name"
            placeholder="이름을 입력해주세요"
            value={information.name}
            onChange={formChange}
          />
        </section>
      </GroupBoxUp>
      <GroupBoxUp className="underLine">
        <section>
          <span>학번</span>
          <InformationInput
            name="number"
            placeholder="학번을 입력해주세요"
            value={information.number}
            onChange={formChange}
          />
        </section>
      </GroupBoxUp>
      <GroupBoxUp className="bottomBox">
        <section>
          <span>학과</span>
          <InformationInput
            name="major"
            placeholder="학과를입력해주세요"
            value={information.major}
            onChange={formChange}
          />
        </section>
      </GroupBoxUp>
      <DetailContentBox
        name="detail"
        placeholder="상세내용"
        value={information.detail}
        onChange={formChange}
      />
    </div>
  );
};

export default InformationBox;
