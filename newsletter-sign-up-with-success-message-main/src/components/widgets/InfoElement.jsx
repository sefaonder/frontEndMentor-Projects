/** @format */

import iconList from "../../assets/icon-list.svg";

function InfoElement({ label }) {
  return (
    <div className='info-element'>
      <img src={iconList} />
      <span>{label}</span>
    </div>
  );
}

export default InfoElement;
