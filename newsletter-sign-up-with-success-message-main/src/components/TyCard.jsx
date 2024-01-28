/** @format */

import iconSucces from "../assets/icon-success.svg";

function TyCard({ setFormOpen, email }) {
  return (
    <div className='card-container'>
      <div className='ty-container'>
        <img className='ty-icon-success' src={iconSucces} />
        <h2 className='ty-header'>Thanks for subscribing!</h2>
        <p className='ty-text'>
          A confirmation email has been sent to <b>{email} </b>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button
          className='form-submit-button'
          onClick={() => setFormOpen(true)}
        >
          Dissmiss message
        </button>
      </div>
    </div>
  );
}

export default TyCard;
