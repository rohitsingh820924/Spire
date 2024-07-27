import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [labelStyle, setLabelStyle] = useState({});
  const labelRef = useRef(null);

  useEffect(() => {
    initSize();
  }, []);

  const handleTabClick = (tabNum, e) => {
    if (!gsap.isTweening(".article")) {
      const $this = e.target;
      const offsetLeft = $this.offsetLeft;

      gsap
        .timeline()
        .to(".article", 0.05, {
          y: 100,
          ease: "back.out",
          onComplete: () => setActiveTab(tabNum),
        })
        .fromTo(
          `.num_${tabNum}`,
          { y: -100 },
          { y: 0, ease: "power4.out", immediateRender: false }
        );

      setLabelStyle({ left: offsetLeft });
    }
  };

  const initSize = () => {
    const startElement = document.querySelector(".tabs-block li:first-of-type");
    setLabelStyle({
      width: startElement.offsetWidth,
      left: startElement.offsetLeft,
    });
  };

  return (
    <div className="tabs h-svh flex section" id='section3'>
      <div className="container">
        <div className="grid grid-cols-2">
          <div></div>

          <div className="articles">
            <div className={`article num_1 ${activeTab === 1 ? "show" : ""}`}>
              <h2 className="text-8xl">Customer</h2>
              <div className="w-1/2 my-10">
                <p className="text-sm mb-3">Quisque quam nisl, lacinia sed odio vitae, ullamcorper consequat nulla. Vestibulum leo odio faucibus id enim quis.</p>
                <ul className="flex flex-col gap-3 text-xs list-arrow">
                    <li>Curabitur a vestibulum nisi</li>
                    <li>Nulla ultricies mi ut mauris convallis</li>
                    <li>Cras iaculis massa eu tortor </li>
                </ul>

                <a href="#" className="next-arrow mt-5 inline-block">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977" fill="black"></path></svg>
                </a>
              </div>
            </div>
            <div className={`article num_2 ${activeTab === 2 ? "show" : ""}`}>
            <h2 className="text-8xl">Partner</h2>
              <div className="w-1/2 my-10">
                <p className="text-sm mb-3">Quisque quam nisl, lacinia sed odio vitae, ullamcorper consequat nulla. Vestibulum leo odio faucibus id enim quis.</p>
                <ul className="flex flex-col gap-3 text-xs list-arrow">
                    <li>Curabitur a vestibulum nisi</li>
                    <li>Nulla ultricies mi ut mauris convallis</li>
                    <li>Cras iaculis massa eu tortor </li>
                </ul>

                <a href="#" className="next-arrow mt-5 inline-block">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977" fill="black"></path></svg>
                </a>
              </div>
            </div>
            <div className={`article num_3 ${activeTab === 3 ? "show" : ""}`}>
            <h2 className="text-8xl">Vendor</h2>
              <div className="w-1/2 my-10">
                <p className="text-sm mb-3">Quisque quam nisl, lacinia sed odio vitae, ullamcorper consequat nulla. Vestibulum leo odio faucibus id enim quis.</p>
                <ul className="flex flex-col gap-3 text-xs list-arrow">
                    <li>Curabitur a vestibulum nisi</li>
                    <li>Nulla ultricies mi ut mauris convallis</li>
                    <li>Cras iaculis massa eu tortor </li>
                </ul>

                <a href="#" className="next-arrow mt-5 inline-block">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977" fill="black"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-container mt-10">
          <ul className="tabs-block">
            <li
              data-menu="1"
              className={activeTab === 1 ? "active" : ""}
              onClick={(e) => handleTabClick(1, e)}
            >
              Customer
            </li>
            <li
              data-menu="2"
              className={activeTab === 2 ? "active" : ""}
              onClick={(e) => handleTabClick(2, e)}
            >
              Partner
            </li>
            <li
              data-menu="3"
              className={activeTab === 3 ? "active" : ""}
              onClick={(e) => handleTabClick(3, e)}
            >
              Vendor
            </li>
            <div className="label" style={labelStyle} ref={labelRef} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
