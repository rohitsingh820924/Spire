import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Customer = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;

      if (scrollPercentage < 33) {
        setActiveTab(0);
      } else if (scrollPercentage < 66) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="section">
      <div className="tabs">
        <button className={activeTab === 0 ? 'active' : ''}>Tab 1</button>
        <button className={activeTab === 1 ? 'active' : ''}>Tab 2</button>
        <button className={activeTab === 2 ? 'active' : ''}>Tab 3</button>
      </div>

      <div className="content">
        <div style={{ height: '300vh' }}>
          <h1>Scroll to change active tab</h1>
        </div>
      </div>
    </div>
  );
};

export default Customer;
