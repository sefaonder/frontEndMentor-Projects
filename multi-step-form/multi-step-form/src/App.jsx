/** @format */

import "./App.css";
import styled from "styled-components";
import desktopImg from "./assets/images/bg-sidebar-desktop.svg";
import mobileImg from "./assets/images/bg-sidebar-mobile.svg";

import StepIndicator from "./components/StepIndicator";
import { useState } from "react";
import FormStepContainer from "./components/FormStepContainer";
import CustomButton from "./components/Inputs/CustomButton";

import InfoCard from "./components/Forms/InfoCard";
import PlanCard from "./components/Forms/PlanCard";
import AddOnsCard from "./components/Forms/AddOnsCard";


import SummaryCard from "./components/Forms/SummaryCard";
import TyCard from "./components/Forms/TyCard"
import { fetchedAddOns, fetchedPlans } from "./data";

// Container
const Container = styled.main`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    background-color: transparent;
    padding: 0px;
  }
`;

// StepSection

const StepSection = styled.section`
  background-image: url(${(props) => props.$bgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 274px;
  height: 568px;

  @media (max-width: 600px) {
    background-image: url(${(props) => props.$bgMobile});

    width: 100%;
    height: 192px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Burası düzeltilecek */
    /* height: 1px; */
  }
`;

// FormSection

const FormSection = styled.section`
  border-radius: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin-top: -3rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    position: fixed;
    background-color: var(--white);
    padding: 1rem;
    bottom: 0px;
    right: 0px;
    width: 92%;
  }
`;

const steps = [
  { title: "step 1", name: "your info" },
  { title: "step 2", name: "select plan" },
  { title: "step 3", name: "add-ons" },
  { title: "step 4", name: "summary" },
];

const formDto = {
  name: "",
  email: "",
  phoneNumber: "",
  rPayment: 0,
  plan: null,
  selectedAddOns: [],
};

function App() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(formDto);
  const [error, setError] = useState();

  console.log(form);

  function handleConfirm() {
    // Do Validations

    // Do Post Req

    // Show TyCard
    setStep(4);
    setForm(formDto)
  }

  return (
    <Container>
      <StepSection $bgDesktop={desktopImg} $bgMobile={mobileImg}>
        <StepIndicator
          steps={steps}
          activeStep={step}
          setStep={(stepNumber) => setStep(stepNumber)}
        />
      </StepSection>
      {/* <form> */}
      <FormSection>
        {step === 0 && <InfoCard form={form} setForm={setForm} />}
        {step === 1 && (
          <PlanCard form={form} setForm={setForm} fetchedPlans={fetchedPlans} />
        )}
        {step === 2 && (
          <AddOnsCard
            form={form}
            setForm={setForm}
            fetchedAddOns={fetchedAddOns}
          />
        )}
        {step === 3 && (
          <FormStepContainer
            header='Finishing up'
            subtext='Double-check everything looks OK before confirming.'
          >
            <SummaryCard form={form} setStep={setStep} />
          </FormStepContainer>
        )}
         {step === 4 && (
          <FormStepContainer
          
          >
            <TyCard/>
          </FormStepContainer>
        )}
        <ButtonGroup>
          {step !== 0 && step !== 4 && (
            <CustomButton
              buttonType='third'
              text='Go Back'
              onClick={() => setStep((prevState) => prevState - 1)}
            />
          )}
          {step === 0 && step === 4 && <div></div>}
          {step !== 3 && step !== 4 && (
            <CustomButton
              buttonType='first'
              text='Next Step'
              onClick={() => setStep((prevState) => prevState + 1)}
            />
          )}
          {step === 3 && (
            <CustomButton
              buttonType='second'
              text='Confirm'
              onClick={() => handleConfirm()}
            />
          )}
        </ButtonGroup>
      </FormSection>
      {/* </form> */}
    </Container>
  );
}

export default App;
