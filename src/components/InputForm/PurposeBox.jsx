import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

// 각 줄의 항목들을 담고 있는 박스입니다.(기능이 비슷하여 export하여 재사용하였습니다.)
const GroupBox = styled.div`
  display: flex;
  width: 358px;
  height: 47.5px;
  background: #ffffff;
  padding: 12px;
  font-size: 13px;
  section {
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  input {
    border: none;
    outline: none;
  }
  &.topBox {
    border-radius: 10px 10px 0px 0px;
  }
  &.underLine {
    border-bottom: 1px solid rgba(115, 119, 123, 0.3);
  }
  &.bottomBox {
    border-radius: 0px 0px 10px 10px;
  }
`;
// 동아리방 사용목적이 적힌 input태그 옆에 색깔표시입니다.
const ColorPoint = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 10px;
  margin-right: 8px;
  background: ${props => props.color};
`;
// 컬러라는 텍스트와 4가지 색깔들을 담고있는 div태그입니다.
const GroupColor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    cursor: pointer;
    margin-right: 10px;
  }
  span:hover {
    transform: scale(1.3);
  }
`;

const PurposeBox = React.memo(function purposeBox({ pageReset }) {
  const [state] = useState([
    { color: '#F8DC81', id: 1 },
    { color: '#89D6A2', id: 2 },
    { color: '#668BC2', id: 3 },
    { color: '#B67DDF', id: 4 },
  ]);
  const [colors, setColors] = useState('#F8DC81');
  const InputRef = useRef();
  if (pageReset === '100vh') {
    InputRef.current.value = '';
  }
  // useCallback을 사용하여 보았다.
  const colorChange = useCallback(id => {
    let newColor = '';
    state.forEach(item => {
      item.id === id ? (newColor = item.color) : item;
    });
    setColors(newColor);
  }, []);
  return (
    <div>
      <GroupBox className="underLine topBox">
        <section>
          <ColorPoint color={colors} />
          <input placeholder="동아리방 사용 목적" ref={InputRef} />
        </section>
      </GroupBox>
      <GroupBox className="bottomBox">
        <GroupColor>
          <section>컬러</section>
          <section>
            {state.map(item => (
              <ColorPoint
                onClick={() => {
                  colorChange(item.id);
                }}
                style={{ background: item.color }}
                key={item.id}
              />
            ))}
          </section>
        </GroupColor>
      </GroupBox>
    </div>
  );
});

PurposeBox.propTypes = {
  pageReset: PropTypes.string,
};

export default PurposeBox;
export { GroupBox };
