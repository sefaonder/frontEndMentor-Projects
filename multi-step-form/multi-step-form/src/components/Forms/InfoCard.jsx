/** @format */

import CustomTextInput from "../Inputs/CustomTextInput";
import FormStepContainer from "../FormStepContainer";

function InfoCard(props) {
  const { form, setForm } = props;
  return (
    <FormStepContainer
      header='Personal info'
      subtext='Please provide your name, email address, and phone number'
    >
      <CustomTextInput
        label='Name'
        id='name'
        placeholder='e.g Stephen King'
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <CustomTextInput
        label='Email'
        id='email'
        placeholder='e.g stephenking@lorem.com'
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <CustomTextInput
        label='Phone Number'
        id='phone'
        placeholder='e.g +1 234 567 890'
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
    </FormStepContainer>
  );
}

export default InfoCard;
