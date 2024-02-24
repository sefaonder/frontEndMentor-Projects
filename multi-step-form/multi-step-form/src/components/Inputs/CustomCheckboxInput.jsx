/** @format */

import styled from "styled-components";

const InputContainer = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  border: 2px solid;
  border-color: ${(props) => props.$active ? '#827db2':'#dcdbe0'};;
  border-radius: 0.5rem;
  background-color: ${(props) => props.$active ? '#f8f9fe':'white'};

  &:hover {
    border: 2px solid #827db2;
    background-color: #f8f9fe;
  }
`;

const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const InputTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 0.25rem;
`;

const InputTextHeader = styled.span``;

const InputSubText = styled.span`
  font-size: 13px;
`;

const PriceText = styled.span`
  margin-left: auto;
  font-size: 14px;
  margin-right: 0.5rem;
`;

function CustomCheckboxInput(props) {
  const { key, id, selected, onChange, price, header, subtext, rPayment } =
    props;
  return (
    <InputContainer key={key} $active={selected} onClick={onChange}>
      <Checkbox
        id={id}
        type='checkbox'
        checked={selected}
        onChange={onChange}
      />
      <InputTextContainer>
        <InputTextHeader>{header}</InputTextHeader>
        <InputSubText>{subtext}</InputSubText>
      </InputTextContainer>
      <PriceText>{`+$${price}/${rPayment ? "yr" : "mo"}`}</PriceText>
    </InputContainer>
  );
}

export default CustomCheckboxInput;
