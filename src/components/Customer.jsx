import React from "react";

const Customer = () => {
  return (
    <div className="customer-section h-svh flex" id="section6">
      <div className="container">
        <div className="grid grid-cols-2 ">
          <div>
            <span className="text-sm uppercase">What We Stand For</span>
            <div>
              <h2 className="text-5xl mt-10">Innovation</h2>
              <h2 className="text-5xl mt-10">Integrity</h2>
              <h2 className="text-5xl mt-10">Collaboration</h2>
              <h2 className="text-5xl mt-10">Customer-Centricity</h2>
              <h2 className="text-5xl mt-10">Resilience</h2>
            </div>
          </div>
          <div className="self-end">
            <p className="w-1/2 ml-auto">We embrace creativity and curiosity to continuously evolve and stay ahead of cyber threats. By investing in research and development, we aim to deliver cutting-edge solutions that set new standards in cybersecurity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
