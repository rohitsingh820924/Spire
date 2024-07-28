import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const TabsScroll = () => {
  const svgRef = useRef(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

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

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    const scaleUp = gsap.to(svgRef.current, {
      scale: 5,
      "-webkit-filter": "hue-rotate(45deg)",
      filter: "hue-rotate(45deg)",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: "2000 top",
        scrub: true,
      },
    });

    const moveLeft = gsap.to(svgRef.current, {
      x: "-300%",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "500 top",
        // end: '2000 top',
        scrub: true,
      },
    });

    return () => {
      pin.kill();
      scaleUp.kill();
      moveLeft.kill();
    };
  }, []);
  return (
    <section className="scroll-section-outer relative">
      <div ref={triggerRef} className="relative">
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="container">
              <div className="grid grid-cols-2">
                <div></div>

                <div className="articles">
                  <div
                    className={`article num_3 ${activeTab === 3 ? "show" : ""}`}
                  >
                    <h2 className="text-8xl">Vendor</h2>
                    <div className="w-1/2 my-10">
                      <p className="text-sm mb-3">
                        Quisque quam nisl, lacinia sed odio vitae, ullamcorper
                        consequat nulla. Vestibulum leo odio faucibus id enim
                        quis.
                      </p>
                      <ul className="flex flex-col gap-3 text-xs list-arrow">
                        <li>Curabitur a vestibulum nisi</li>
                        <li>Nulla ultricies mi ut mauris convallis</li>
                        <li>Cras iaculis massa eu tortor </li>
                      </ul>

                      <a href="#" className="next-arrow mt-5 inline-block">
                        <svg
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977"
                            fill="black"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-section">
            <div className="container">
              <div className="grid grid-cols-2">
                <div></div>

                <div className="articles">
                  <div
                    className={`article num_1 ${activeTab === 1 ? "show" : ""}`}
                  >
                    <h2 className="text-8xl">Customer</h2>
                    <div className="w-1/2 my-10">
                      <p className="text-sm mb-3">
                        Quisque quam nisl, lacinia sed odio vitae, ullamcorper
                        consequat nulla. Vestibulum leo odio faucibus id enim
                        quis.
                      </p>
                      <ul className="flex flex-col gap-3 text-xs list-arrow">
                        <li>Curabitur a vestibulum nisi</li>
                        <li>Nulla ultricies mi ut mauris convallis</li>
                        <li>Cras iaculis massa eu tortor </li>
                      </ul>

                      <a href="#" className="next-arrow mt-5 inline-block">
                        <svg
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977"
                            fill="black"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-section">
            <div className="container">
              <div className="grid grid-cols-2">
                <div></div>

                <div className="articles">
                  <div
                    className={`article num_2 ${activeTab === 2 ? "show" : ""}`}
                  >
                    <h2 className="text-8xl">Partner</h2>
                    <div className="w-1/2 my-10">
                      <p className="text-sm mb-3">
                        Quisque quam nisl, lacinia sed odio vitae, ullamcorper
                        consequat nulla. Vestibulum leo odio faucibus id enim
                        quis.
                      </p>
                      <ul className="flex flex-col gap-3 text-xs list-arrow">
                        <li>Curabitur a vestibulum nisi</li>
                        <li>Nulla ultricies mi ut mauris convallis</li>
                        <li>Cras iaculis massa eu tortor </li>
                      </ul>

                      <a href="#" className="next-arrow mt-5 inline-block">
                        <svg
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977"
                            fill="black"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-container bottom-20 z-50 fixed w-full">
        <ul className="tabs-block">
          <li>Customer</li>
          <li>Partner</li>
          <li>Vendor</li>
          <div className="label" />
        </ul>
      </div>
    </section>
  );
};

export default TabsScroll;
