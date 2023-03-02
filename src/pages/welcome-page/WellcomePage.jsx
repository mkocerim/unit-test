import React from "react";
import Form from "../form/Form";
import Scoops from "./Scoops";
import Toppings from "./Toppings";

const WellcomePage = () => {
  return (
    <div>
      {/*CESITLER */}
      <Scoops />
      {/*SOSLAR */}
      <Toppings />
      {/*FORM */}
      <Form />
    </div>
  );
};

export default WellcomePage;
