/** @format */

import styled from "styled-components";

const CustomButtonElement = styled.button`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  transition-duration: 0.4s;

  &:disabled {
    opacity: 0.8;
  }

  &:hover {
    transform: scale(1.1);
  }

  border: none;
  border-radius: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  cursor: pointer;
`;

function CustomButton(props) {
  const { disable, text, onClick, buttonType } = props;
  let bgColor, color;
  if (buttonType === "first") {
    bgColor = "var(--marine-blue)";
    color = "var(--white)";
  }
  if (buttonType === "second") {
    bgColor = "var(--purplish-blue)";
    color = "var(--white)";
  }
  if (buttonType === "third") {
    bgColor = "var(--white)";
    color = "var(--cool-gray)";
  }
  return (
    <CustomButtonElement
      disabled={disable}
      onClick={() => onClick()}
      $bgColor={bgColor}
      $color={color}
    >
      {text}
    </CustomButtonElement>
  );
}

export default CustomButton;
