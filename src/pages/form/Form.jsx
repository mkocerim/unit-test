import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <form className="mt-4 row justify-content-center aling-items-center">
      <div className="col-4 d-flex  gap-4">
        <input
          type="checkbox"
          id="kosullar"
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }} //!isChecked = e.target.checked
        />
        <label htmlFor="kosullar">Kosullari okudum kabul ediyorum</label>
      </div>
      <button
        disabled={!isChecked}
        className="btn btn-success col-3 col-sm-3 col-md-2"
      >
        Siparisi Onayla
      </button>
    </form>
  );
};

export default Form;
