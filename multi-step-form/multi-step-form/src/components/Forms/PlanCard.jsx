/** @format */
import styled from "styled-components";

import FormStepContainer from "../FormStepContainer";
import CustomSelectInput from "../Inputs/CustomSelectInput";
import CustomToggleInput from "../Inputs/CustomToggleInput";
import { calculatePrice } from "../../helper";

const PlanInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

`;

function PlanCard(props) {
  const { form, setForm, fetchedPlans } = props;


  return (
    <FormStepContainer
      header='Select your plan'
      subtext='You have the option of monthly or yearly billing.'
    >
      <PlanInputContainer>
        {fetchedPlans.map((item) => {
          return (
            <CustomSelectInput
              key={item.id}
              id={item.id}
              icon={item.icon}
              name={item.name}
              price={calculatePrice(
                item.basePrice,
                form.rPayment,
                item.discount
              )}
              rPayment={form.rPayment}
              discount={form.rPayment ? item.discount : false}
              selected={form.plan}
              setSelected={(value) => setForm({ ...form, plan: value })}
            />
          );
        })}
      </PlanInputContainer>
      <CustomToggleInput
        active={form.rPayment}
        setToggle={(value) => setForm({ ...form, rPayment: value })}
      />
    </FormStepContainer>
  );
}

export default PlanCard;
