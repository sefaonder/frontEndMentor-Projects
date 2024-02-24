/** @format */

import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputUpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 13px;
`;

const InputErrorMessage = styled.span`
  font-size: 12px;
  color: var(--strawberry-red);
  font-weight: 500;
`;

const StyledInput = styled.input`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  outline: none;
  border: ${(props) =>
    props.$error ? "2px solid var(--strawberry-red)" : "1px solid gray;"};
`;

function CustomTextInput(props) {
  const { onChange, id, type, error, value, label, placeholder } = props;
  return (
    <InputContainer>
      <InputUpperContainer>
        <InputLabel>{label}</InputLabel>
        {error && <InputErrorMessage>{error}</InputErrorMessage>}
      </InputUpperContainer>
      <StyledInput
        required
        type={type}
        value={value}
        $error={error}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default CustomTextInput;
