/** @format */

import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--alabaster);
  padding: 1rem;
`;

const Toggle = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: var(--marine-blue);

  border-radius: 1rem;
  cursor: pointer;

  width: 2.25rem;
  height: 1rem;
  padding: 0.25rem;

  margin-left: 1rem;
  margin-right: 1rem;

  & > span {
    background-color: var(--white);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
    transform: ${(props) =>
      props.$active ? "translateX(20px)" : "translateX(0px)"};
  }
`;

const Options = styled.span`
  font-weight: 500;
  color: ${(props) =>
    props.$active ? "var(--marine-blue)" : "var(--cool-gray)"};
`;

function CustomToggleInput(props) {
  const { setToggle, active } = props;
  // active = 0 // Monthly
  // active = 1 // Yearly
  return (
    <ToggleContainer>
      <Options $active={active === 0}>Monthly</Options>
      <Toggle onClick={() => setToggle(active === 0 ? 1 : 0)} $active={active}>
        <span />
      </Toggle>
      <Options $active={active === 1}>Yearly</Options>
    </ToggleContainer>
  );
}

export default CustomToggleInput;
