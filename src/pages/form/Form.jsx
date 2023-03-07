import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <form className="mt-4 mb-4 gap-4  d-flex justify-content-center aling-items-center">
      <div className="d-flex gap-4">
        <input
          type="checkbox"
          id="kosullar"
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }} //!isChecked = e.target.checked
        />
        <div className="text-nowrap kosullar">
          <p
            style={{ opacity: isVisible ? "1" : "0" }}
            className="bg-light text-dark p-2 rounded shadow popup"
          >
            Size gercekten birsey teslim etmeyecegiz
          </p>
          <label htmlFor="kosullar">Kosullari okudum kabul ediyorum</label>
        </div>
      </div>
      <button
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
        disabled={!isChecked}
        className="btn btn-warning"
        style={{ width: "150px" }}
      >
        Siparisi Onayla
      </button>
    </form>
  );
};

export default Form;
