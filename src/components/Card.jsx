import React from "react";

const Card = ({ cesit, handleReset, setSepet, sepet, adet }) => {
  return (
    <div
      className="col-3 d-flex flex-column align-items-center"
      style={{ width: "150px" }}
      key={cesit.name}
    >
      <img
        id={cesit.name}
        className="w-100"
        src={cesit.imagePath}
        alt="cesit"
      />
      <label htmlFor="lead">{cesit.name}</label>
      <div className="d-flex gap-3 mt-2 aling-items-center">
        <button className="btn btn-danger" onClick={() => handleReset(cesit)}>
          Sifirla
        </button>
        <span className="lead">{adet}</span>
        <button
          className="btn btn-success"
          onClick={() => setSepet([...sepet, cesit])}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
