/** @format */
import styled from "styled-components";
import CustomCheckboxInput from "../Inputs/CustomCheckboxInput";
import FormStepContainer from "../FormStepContainer";
import { calculatePrice } from "../../helper";

const AddOnsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

function AddOnsCard(props) {
  const { form, setForm, fetchedAddOns } = props;

  function addOrDelete(arr, value) {
    const index = arr.indexOf(value);

    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }

    return arr;
  }



  return (
    <FormStepContainer
      header='Pick add-ons'
      subtext='Add-ons help enhance your gaming experince.'
    >
      <AddOnsCardContainer>
        {fetchedAddOns.map((item) => {
          return (
            <CustomCheckboxInput
              key={item.id}
              id={item.id}
              header={item.header}
              price={calculatePrice(
                item.basePrice,
                form.rPayment,
                item.discount
              )}
              subtext={item.subtext}
              rPayment={form.rPayment}
              selected={form.selectedAddOns.includes(item.id)}
              onChange={() => {
                const newSelectedAddOns = addOrDelete(
                  form.selectedAddOns,
                  item.id
                );

                setForm({ ...form, selectedAddOns: newSelectedAddOns });
              }}
            />
          );
        })}
      </AddOnsCardContainer>
    </FormStepContainer>
  );
}

export default AddOnsCard;
