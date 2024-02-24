/** @format */

import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
  min-width: 6rem;

  border: 2px solid;
  border-color: ${(props) => props.$selected ? '#827db2':'#dcdbe0'};;
  border-radius: 0.5rem;
  background-color: ${(props) => props.$selected ? '#f8f9fe':'white'};

  &:hover {
    border: 2px solid #827db2;
    background-color: #f8f9fe;
  }

  @media (max-width: 600px) {
    flex-direction: row;
  }

`;

const IconContainer = styled.div`
  /* margin-right: 3rem; */
  
  margin-bottom: 2.5rem;

  @media (max-width: 600px) {
    margin-right: 1rem;
    margin-bottom: 0.25rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

const NameText = styled.span``;

const PriceText = styled.span`
  font-size: 12px;
`;

const DiscountText = styled.span`
  font-size: 12px;
`;

function CustomSelectInput(props) {
  const {
    icon,
    name,
    price,
    rPayment,
    discount,
    setSelected,
    id,
    key,
    selected,
  } = props;

  return (
    <InputContainer
      key={key}
      onClick={() => setSelected(id)}
      $selected={selected === id}
    >
      <IconContainer>
        <img src={icon} />
      </IconContainer>
      <TextContainer>
        <NameText>{name}</NameText>
        <PriceText>{`$${price}/${rPayment ? "yr" : "mo"}`}</PriceText>
        {discount && <DiscountText>{`${discount} months free`}</DiscountText>}
      </TextContainer>
    </InputContainer>
  );
}

export default CustomSelectInput;
