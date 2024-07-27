import './App.css'
import Banner from "./components/Banner"
import Customer from './components/Customer'
import Header from "./components/Header"
import Security from './components/Security'
import SpireShape from "./components/SpireShape"
import Success from "./components/Success"
import Tabs from './components/Tabs'
import Trusted from './components/Trusted'

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import TabsScroll from './components/TabsScroll'

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const [sections, setSections] = useState([]);

  // useEffect(() => {
  //   const sections = document.querySelectorAll('.section');
  //   setSections(sections);
  //   let currentIndex = -1;
  //   const wrap = gsap.utils.wrap(0, sections.length);
  //   let animating;

  //   gsap.set(sections, { yPercent: 100 });

  //   const gotoSection = (index, direction) => {
  //     index = wrap(index); // make sure it's valid
  //     animating = true;
  //     const fromTop = direction === -1;
  //     const dFactor = fromTop ? -1 : 1;
  //     const tl = gsap.timeline({
  //       defaults: { duration: 1.25, ease: 'power1.inOut' },
  //       onComplete: () => (animating = false),
  //     });

  //     if (currentIndex >= 0) {
  //       // The first time this function runs, current is -1
  //       gsap.set(sections[currentIndex], { zIndex: 0 });
  //       tl.to(sections[currentIndex], { yPercent: -100 * dFactor }).set(
  //         sections[currentIndex],
  //         { autoAlpha: 0 }
  //       );
  //     }
  //     gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  //     tl.fromTo(
  //       sections[index],
  //       { yPercent: 100 * dFactor },
  //       { yPercent: 0 },
  //       0
  //     );

  //     currentIndex = index;
  //   };

  //   Observer.create({
  //     type: 'wheel,touch,pointer',
  //     wheelSpeed: -1,
  //     onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  //     onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  //     tolerance: 10,
  //     preventDefault: true,
  //   });

  //   gotoSection(0, 1);

  //   return () => {
  //     Observer.getAll().forEach(observer => observer.kill());
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('.section');
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     let closestSection = sections[0];

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       if (Math.abs(scrollY - sectionTop) < Math.abs(scrollY - closestSection.offsetTop)) {
  //         closestSection = section;
  //       }
  //     });

  //     window.scrollTo({
  //       top: closestSection.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

//   useEffect(() => {
//     const scrollableElements = document.querySelectorAll('.section');
    
//     const handleScroll = (element, index) => {
//         return () => {
//             if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
//                 if (index < scrollableElements.length - 1) {
//                     scrollableElements[index + 1].scrollIntoView({ behavior: 'smooth' });
//                 }
//             }
//         };
//     };

//     scrollableElements.forEach((element, index) => {
//         const listener = handleScroll(element, index);
//         element.addEventListener('scroll', listener);

//         // Cleanup function to remove event listeners
//         return () => {
//             element.removeEventListener('scroll', listener);
//         };
//     });
// }, []); // Empty dependency array ensures this runs once on mount

useEffect(() => {
  const scrollTrigger1 = ScrollTrigger.create({
      trigger: "#section1",
      pin: "#section1",
      start: "center center",
      end: "+=500",
  });

  const scrollTrigger2 = ScrollTrigger.create({
    trigger: "#section2",
    pin: "#section2",
    start: "center center",
    end: "+=500",
});

const scrollTrigger3 = ScrollTrigger.create({
  trigger: "#section3",
  pin: "#section3",
  start: "center center",
  end: "+=500",
});

const scrollTrigger4 = ScrollTrigger.create({
  trigger: "#section4",
  pin: "#section4",
  start: "center center",
  end: "+=500",
});

const scrollTrigger5 = ScrollTrigger.create({
  trigger: "#section5",
  pin: "#section5",
  start: "center center",
  end: "+=500",
});

  // Cleanup function to remove ScrollTrigger on component unmount
  return () => {
      scrollTrigger1.kill();
      scrollTrigger2.kill();
      scrollTrigger3.kill();
      scrollTrigger4.kill();
      scrollTrigger5.kill();
  };
}, []);


  return (
    <>
      <Header />
      <SpireShape />
      <div className="spire-container">
        <Banner />
        <Success />
        {/* <Tabs /> */}
        <TabsScroll/>
        <Trusted />
        <Security />
        <Customer />
      </div>
      
    </>
  )
}

export default App
