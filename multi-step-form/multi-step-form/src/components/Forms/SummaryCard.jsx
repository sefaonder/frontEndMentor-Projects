/** @format */

import styled from "styled-components";
import { fetchedAddOns, fetchedPlans } from "../../data";
import { calculatePrice } from "../../helper";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SummaryContainer = styled.div`
  background-color: var(--alabaster);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--marine-blue);
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlanHeader = styled.div`
  margin-bottom: 0.5rem;
`;

const ChangeAnchor = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: var(--cool-gray);
`;

const PlanPrice = styled.span`
font-weight: 800;
`;

const AddOnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddOnsItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddOnsName = styled.span`
  color: var(--cool-gray);
`;

const AddOnsPrice = styled.span``;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top:1rem;
`;

const TotalName = styled.div`
  color: var(--cool-gray);
`;

const TotalPrice = styled.span`
font-weight: 800;
font-size: 20px;
color: #5147d5;
`;

const Divider = styled.div`
  height: 1px;
  display: flex;
  background-color: gray;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

function SummaryCard(props) {
  const { form, setStep } = props;
  console.log(form);
  const selectedPlan = fetchedPlans.filter((item) => {
    console.log(item);
    return item.id === form.plan;
  });

  const selectedAddOns = fetchedAddOns.filter((item) =>
    form.selectedAddOns.includes(item.id)
  );

  const planPrice = calculatePrice(
    selectedPlan[0]?.basePrice,
    form.rPayment,
    selectedPlan[0]?.discount
  );
  const addOnsPrice = selectedAddOns.reduce(
    (acc, currentItem) =>
      acc +
      calculatePrice(
        currentItem.basePrice,
        form.rPayment,
        currentItem.discount
      ),
    0
  );
  console.log("add-onsprice", addOnsPrice);

  const totalPrice = planPrice + addOnsPrice;
  console.log(selectedAddOns);
  return (
    <CardContainer>
      <SummaryContainer>
        <PlanContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PlanHeader>{`${selectedPlan[0]?.name} (${
              form.rPayment ? "Yearly" : "Monthly"
            })`}</PlanHeader>
            <ChangeAnchor onClick={() => setStep(1)}>Change</ChangeAnchor>
          </div>
          <PlanPrice>{`$${planPrice}/${
            form.rPayment ? "yr" : "mo"
          }`}</PlanPrice>
        </PlanContainer>
        <Divider />
        <AddOnsContainer>
          {selectedAddOns.map((item) => (
            <AddOnsItem key={item.id}>
              <AddOnsName>{item.header}</AddOnsName>
              <AddOnsPrice>{`+$${calculatePrice(
                item.basePrice,
                form.rPayment,
                item.discount
              )}/${form.rPayment ? "yr" : "mo"}`}</AddOnsPrice>
            </AddOnsItem>
          ))}
        </AddOnsContainer>
      </SummaryContainer>
      <TotalContainer>
        <TotalName>{`Total (per ${
          form.rPayment ? "year" : "month"
        })`}</TotalName>
        <TotalPrice>{`+$${totalPrice}/${
          form.rPayment ? "yr" : "mo"
        }`}</TotalPrice>
      </TotalContainer>
    </CardContainer>
  );
}

export default SummaryCard;
