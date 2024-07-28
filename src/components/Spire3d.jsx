import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Spire3d = () => {

    const canvasRef = useRef(null);
  const brickWrapRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      let URL = `https://moonbase.nyc3.cdn.digitaloceanspaces.com/lvdv-brick-dev/webp/frame_`;

      canvas.width = 1920;
      canvas.height = 1200;

      const context = canvas.getContext("2d");

      const frameCount = 599;
      const scrollableFrames = 200;
      const images = [];
      const position = {
        frame: 0
      };
      const currentFrame = (index) =>
        URL + (index + 1).toString().padStart(3, "0") + ".webp";

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[position.frame], 0, 0);
      };

      images[0].onload = render;

      let loop = gsap.fromTo(
        position,
        {
          frame: 200
        },
        {
          frame: 598,
          duration: 13,
          repeat: -1,
          snap: "frame",
          ease: "none",
          onUpdate: render,
          paused: true
        }
      );

      let scrollAnimation = gsap.to(position, {
        frame: scrollableFrames - 1,
        snap: "frame",
        ease: "Circ.easeInOut",
        scrollTrigger: {
          scrub: 0.5,
          trigger: trackRef.current,
          start: "top",
          pin: brickWrapRef.current,
          markers: true,
          onLeave: function () {
            loop.seek(0);
            loop.play();
          },
          onEnterBack: function () {
            loop.pause();
          },
          onUpdate: (self) => console.log("progress", self.progress)
        },
        onUpdate: render
      });

      return () => {
        // Clean up GSAP animations and ScrollTrigger instances
        scrollAnimation.kill();
        loop.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div ref={brickWrapRef} className="brick-wrap h-svh w-full">
      <div ref={trackRef} className="track">
        <canvas ref={canvasRef} className="w-full"></canvas>
      </div>
    </div>
  )
}

export default Spire3d