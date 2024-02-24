/** @format */

import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  max-width: 25rem;
`;

const FormHeader = styled.div`
  color: var(--marine-blue);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const FormSubtext = styled.div`
  color: var(--cool-gray);
  margin-bottom: 1rem;
`;

const FormInputContainer = styled.div``;

function FormStepContainer(props) {
  const { children, header, subtext } = props;
  return (
    <FormContainer>
      <FormHeader>{header}</FormHeader>
      <FormSubtext>{subtext}</FormSubtext>
      <FormInputContainer>{children}</FormInputContainer>
    </FormContainer>
  );
}

export default FormStepContainer;
