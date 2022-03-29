import React from "react";
import { FaReact } from "react-icons/fa";

export default function SectionTwo() {
  return (
    <div className="container-fluid bg-dark ">
      <div className="text-center text-white  pt-md-5 ">
        <p className="section-Two-p1 "> Save wild Life Tokenomics</p>
        <h3 className="section-Two-h3"> Tokenomics</h3>
      </div>
      <div className="d-md-flex justify-content-between just g-5 ">
        <div className="forhover">
          <div
            className=" text-center text-white border border-0  rounded shadow-lg forpad 
          "
            data-mdb-toggle="animation"
            data-mdb-animation-reset="true"
            data-mdb-animation="slide-out-right"
          >
            <FaReact className="react-icon" />
            <h4>Token Distribution</h4>
            <p>1,000,000,000</p>
            <p>Total Token Supply</p>
          </div>
        </div>
        <div className="forhover">
          <div className="text-center text-white border border-0  rounded shadow-lg forpad ">
            <FaReact className="react-icon" />
            <h4>Token Distribution</h4>
            <p>1,000,000,000</p>
            <p>Total Token Supply</p>
          </div>
        </div>{" "}
        <div className="forhover">
          <div className=" text-center text-white border border-0  rounded shadow-lg forpad">
            <FaReact className="react-icon" />
            <h4>Token Distribution</h4>
            <p>1,000,000,000</p>
            <p>Total Token Supply</p>
          </div>
        </div>
        <div className="forhover">
          <div className=" text-center text-white border border-0  rounded shadow-lg forpad">
            <FaReact className="react-icon" />
            <h4>Token Distribution</h4>
            <p>1,000,000,000</p>
            <p>Total Token Supply</p>
          </div>
        </div>
      </div>
      <div className="text-center p-3 padding">
        <button type="button" class="btn btn-primary btn-lg pe-5 ps-5">
          Live Chart
        </button>
      </div>
    </div>
  );
}
