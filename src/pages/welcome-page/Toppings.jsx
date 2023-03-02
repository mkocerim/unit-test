import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [soslar, setSoslar] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/soslar")
      .then((res) => {
        console.log(">>SOSLAR", res);
        setSoslar(res.data);
      })
      .catch((err) => {
        //!TODO
      });
  }, []);
  const handleChange = (e, sos) => {
    const filtered = sepet.filter((i) => i.name !== sos.name);
    e.target.checked ? setSepet([...sepet, sos]) : setSepet(filtered);
  };
  return (
    <div className="container">
      <h1 className="text-start">Sos Cesitleri</h1>
      <p className="text-start">Tanesi $2</p>
      <h2 className="text-start">Soslar Ücreti: ${sepet.length * 2}</h2>
      <div className="row  gap-3 ">
        {soslar.map((sos) => (
          <div
            key={sos.name}
            className="d-flex flex-column align-items-center"
            style={{ width: "150px" }}
          >
            <img src={sos.imagePath} className="w-100" alt="" />
            <label htmlFor={sos.name} className="text-nowrap">
              {sos.name}
            </label>
            <input
              id={sos.name}
              className="form-check-input"
              type="checkbox"
              onChange={(e) => handleChange(e, sos)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
