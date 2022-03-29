import React from "react";

export default function SectionOne() {
  return (
    <div className="section-One-Container">
      <div className="section-one-heading">
        <h1 className="text-uppercase text-center text-dark fw-bold">llama</h1>
        <h1 className="text-uppercase text-center text-dark fw-bold ">coin</h1>
      </div>
      <div className="section-Two-Heading">
        <h3 className="text-uppercase text-center text-dark fw-bold fontsizing">
          donate every 2 percent
        </h3>
        <h3 className="text-uppercase text-center text-dark fw-bold fontsizing">
          transaction
        </h3>
        <div className="text-center ">
          <button
            style={{ hover: "red" }}
            type="button"
            class="btn  bg-white text-primary text-uppercase px-4 fw-bold forsection1buttomhover   "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
