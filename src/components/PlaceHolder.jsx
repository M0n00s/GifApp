import React from "react";

export const PlaceHolder = () => {
  return (
    <>
      <div className="col-3 placeholder-glow d-flex flex-column justify-content-center gap-1 mt-5 w-100">
        <span className="placeholder col-6"></span>
        <span className="placeholder w-75"></span>
        <span className="placeholder" style={{ width: "25%" }}></span>
        <p className="badge bg-secondary">search something</p>
      </div>
    </>
  );
};
