import axios from "axios";
import React, { useEffect, useState } from "react";

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
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

  return (
    <>
      <h1 className="text-start">Dondurma Cesitleri</h1>
      <p className="text-start">Tanesi $3</p>
      <h2 className="text-start">Cesitler Ücreti: 0</h2>
      <div className="row d-flex gap-7 p-4 justify-content-around">
        {cesitler.map((cesit) => {
          return (
            <>
              <div
                className="col-3 d-flex flex-column aling-items-center"
                style={{ width: "200px" }}
              >
                <img
                  id={cesit.name}
                  className="w-100"
                  src={cesit.imagePath}
                  alt="cesit"
                />
                {/*TODO ALT TAG*/}
                <label className="lead">{cesit.name}</label>
                <div className="d-flex gap-1 align-items-center justify-content-center mt-2">
                  <button className="btn btn-danger">Reset</button>
                  <span className="lead">0</span>
                  <button className="btn btn-success">Add</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Scoops;
