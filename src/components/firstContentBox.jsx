import { useState } from 'react';
import styled from 'styled-components';
import { memo } from 'react';
import React from 'react';

//  동아리방 사용 목적 placeholder가 적혀있는 input태그
const Input = styled.input`
  border: none;
  font-size: 10px;
  outline: none;
`;

//  동아리방 사용 목적이라고 적힌 input태그 옆에 색깔박스를 의미
const ColorBox = styled.span`
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: 15px;
  margin-top: 4px;
  border-radius: 10px;
`;

const ColorDivide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    cursor: pointer;
  }
  span:hover {
    transform: scale(1.3);
  }
`;

const TotalBox = styled.div`
  margin-top: 40px;
`;

const GroupBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 380px;
  background: #ffffff;

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
  & section {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
  }

  & + & {
    margin-top: 0px;
  }
  &.purpose {
    border-radius: 10px 10px 0px 0px;
    border-bottom: 2px solid rgba(115, 119, 123, 0.3);
  }
  &.colorSelect {
    border-radius: 0px 0px 10px 10px;
  }
`;

const FisrtContentBox = memo(function FirstContentBox() {
  const [state, setState] = useState([
    { color: '#F8DC81', id: 1 },
    { color: '#89D6A2', id: 2 },
    { color: '#668BC2', id: 3 },
    { color: '#B67DDF', id: 4 },
  ]);
  const [colors, setColors] = useState('#F8DC81');

  const colorChange = id => {
    let newColor = '';
    const colors = state.forEach(item => {
      if (item.id === id) {
        newColor = item.color;
      }
    });
    setColors(newColor);
  };

  return (
    <TotalBox>
      <GroupBox className="purpose">
        <ColorBox style={{ background: colors }} />
        <Input placeholder="동아리방 사용 목적" />
      </GroupBox>
      <GroupBox className="colorSelect">
        <ColorDivide>
          <section>컬러</section>
          <div>
            {state.map(item => (
              <ColorBox
                onClick={() => {
                  colorChange(item.id);
                }}
                style={{ background: item.color }}
                key={item.id}
              />
            ))}
          </div>
        </ColorDivide>
      </GroupBox>
    </TotalBox>
  );
});

export default FisrtContentBox;
