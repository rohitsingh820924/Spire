import React, { useRef } from 'react';
import ShapeInner from '../assets/spire-shape-inner.png'
import ShapeOuter from '../assets/spire-shape-outer.png'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const SpireShape = () => {
  const svgRef = useRef(null);
  
  useGSAP(() => {
  
    const satrtUp = gsap.to(svgRef.current, {
      x: '0%',
      scrollTrigger: {
        trigger: '#section1',
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      },
    });

    const moveLeft = gsap.to(svgRef.current, {
      x: '-50%',
      scrollTrigger: {
        trigger: '#section3',
        start: "+=0", 
        end: "+=500",
        scrub: true,
      },
    });

    const moveRight = gsap.to(svgRef.current, {
      x: '150%',
      scrollTrigger: {
        trigger: '#section4',
        start: "+=500", 
        end: "center center",
        scrub: true,
      },
    });

    const move6 = gsap.to(svgRef.current, {
      x: '0%',
      scale: 1,
      scrollTrigger: {
        trigger: '#section5',
        start: "+=500", 
        end: "center center",

        scrub: true,
      },
    });

    const moveCenter = gsap.to(svgRef.current, {
      x: '70%',
      scrollTrigger: {
        trigger: '#section6',
        start: "+=1000", 
        end: "center center",

        scrub: true,
      },
    });
  
    const move7 = gsap.to(svgRef.current, {
      x: '150%',
      scrollTrigger: {
        trigger: '#section7',
        start: "+=1500", 
        end: "center center",

        scrub: true,
      },
    });
    const move8 = gsap.to(svgRef.current, {
      x: '0%',
      y: '-50%',
      scrollTrigger: {
        trigger: '#section8',
        start: "+=2000", 
        end: "center center",

        scrub: true,
      },
    });
  
    // const moveLeft = gsap.to(svgRef.current, {
    //   x: '100%',
    //   scrollTrigger: {
    //     trigger: '.container',
    //     start: '500 top',
    //     scrub: true,
    //   },
    // });
  
    return () => {
      pin.kill();
      satrtUp.kill();
      moveLeft.kill();
      moveRight.kill();
      moveCenter.kill();
      move6.kill();
      move7.kill();
      move8.kill();
    };
  }, []);
  
  return (
    <div className='spire-shape' ref={svgRef}>
        <div className='relative spire-animation'>
            <img className='absolute left-0 top-0 w-full h-auto shape-inner' src={ShapeInner} alt="Spire Sahpe Inner" />
            <img className='absolute left-0 top-0 w-full h-auto shape-outer' src={ShapeOuter} alt="Spire Sahpe Outer" />
        </div>
    </div>
  )
}

export default SpireShape