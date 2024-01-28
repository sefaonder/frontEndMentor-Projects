/** @format */

import { useEffect, useState } from "react";

function CustomInput({ setForm }) {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onValidate = (value) => {
    if (validateEmail(value)) {
      setError(false);
      setForm(value);
    } else {
      setError(true);
    }
  };

  return (
    <div className='input-container'>
      <div className='input-upper-container'>
        <label htmlFor='email'>Email address</label>
        {error && <span className='input-err-msg'>Valid email required</span>}
      </div>
      <input
        required
        value={value}
        id='email'
        className={error ? "input-danger" : ""}
        type='email'
        placeholder='email@company.com'
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => onValidate(e.target.value)}
      ></input>
    </div>
  );
}

export default CustomInput;
