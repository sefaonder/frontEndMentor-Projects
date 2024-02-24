/** @format */

import styled from "styled-components";

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
  }
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const StepItemButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  /*  */
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-size: 1rem;
  }

  /*  */
  background-color: ${(props) =>
    props.$active ? "var(--light-blue)" : "transparent"};
  color: ${(props) => (props.$active ? "var(--marine-blue)" : "var(--white)")};
  border: 2px solid var(--light-blue);

  /*  */
  cursor: pointer;
  margin-right: 1rem;
`;

const StepTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StepItemHeader = styled.span`
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 0.5rem;
  color: var(--cool-gray);
`;

const StepItemText = styled.span`
  text-transform: uppercase;

  color: var(--white);
  /* font-weight: 500; */
`;

function StepIndicator(props) {
  const { steps, activeStep, setStep } = props;
  return (
    <StepContainer>
      {steps.map((item, index) => {
        return (
          <StepItem key={index}>
            <StepItemButton
              onClick={() => setStep(index)}
              $active={index === activeStep}
            >
              {index + 1}
            </StepItemButton>
            <StepTextContainer>
              <StepItemHeader>{item.title}</StepItemHeader>
              <StepItemText>{item.name}</StepItemText>
            </StepTextContainer>
          </StepItem>
        );
      })}
    </StepContainer>
  );
}

export default StepIndicator;
