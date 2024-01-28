/** @format */

import CustomInput from "./widgets/CustomInput";
import InfoElement from "./widgets/InfoElement";
import illDesktop from "../assets/illustration-sign-up-desktop.svg";
import illMobile from "../assets/illustration-sign-up-mobile.svg";
import { useEffect, useState } from "react";

function FormCard({ setForm }) {
  return (
    <div className='card-container'>
      <div className='form-container'>
        <h2 className='form-header'>Stay updated!</h2>
        <p className='form-text'>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className='form-info-element-container'>
          <InfoElement label='Product discovery and building what matters' />
          <InfoElement label='Measuring to ensure updates are a success' />
          <InfoElement label='And much more!' />
        </div>

        <CustomInput
          setForm={(value) => {
            setForm(value);
          }}
        />

        <button className='form-submit-button'>
          Subscribe to monthly newsletter
        </button>
      </div>

      <div className='form-img-container'>
        <img className='img-desktop' src={illDesktop} />
        <img className='img-mobile' src={illMobile} />
      </div>
    </div>
  );
}

export default FormCard;
