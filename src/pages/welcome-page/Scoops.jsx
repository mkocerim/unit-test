import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/cesitler")
      .then((res) => {
        console.log(res.data);
        setCesitler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //SIFIRLAMA ISLEMI
  const handleReset = (param) => {
    const reseted = sepet.filter((i) => i.name !== param.name);
    setSepet(reseted);
  };
  //ADET BULMA FONK.
  const findAmount = (param) => {
    const bulundu = sepet.filter((i) => i.name === param.name);
    return bulundu.length;
  };

  return (
    <div className="container">
      <h1 className="text-start">Dondurma Cesitleri</h1>
      <p className="text-start">Tanesi $3</p>
      <h2 className="text-start">Cesitler Ücreti: ${sepet.length * 3}</h2>
      <div className="row d-flex gap-7 p-4 justify-content-around">
        {cesitler.map((cesit) => {
          const adet = findAmount(cesit);
          return (
            <Card
              key={cesit.name}
              cesit={cesit}
              findAmount={findAmount}
              handleReset={handleReset}
              adet={adet}
              sepet={sepet}
              setSepet={setSepet}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;
