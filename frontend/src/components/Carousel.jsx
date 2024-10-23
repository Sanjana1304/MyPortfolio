// Carousel.js
import React, { useEffect } from 'react';
import '../Carousel.css'; // Move your CSS file here
//import a from '../'

const Carousel = ({ onHover }) => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const containerCarrossel = container.querySelector(".container-carrossel");
    const carrossel = container.querySelector(".carrossel");
    const carrosselItems = carrossel.querySelectorAll(".carrossel-item");

    let isMouseDown = false;
    let currentMousePos = 0;
    let lastMousePos = 0;
    let lastMoveTo = 0;
    let moveTo = 0;

    const createCarrossel = () => {
      const carrosselProps = onResize();
      const length = carrosselItems.length;
      const degrees = 360 / length;
      const gap = 20;
      const tz = distanceZ(carrosselProps.w, length, gap);

      const height = calculateHeight(tz);

      container.style.width = tz * 2 + gap * length + "px";
      container.style.height = height + "px";

      carrosselItems.forEach((item, i) => {
        const degreesByItem = degrees * i + "deg";
        item.style.setProperty("--rotatey", degreesByItem);
        item.style.setProperty("--tz", tz + "px");

         // Add event listeners for hover
         item.addEventListener('mouseenter', () => onHover(i + 1)); // Pass the item number (i + 1)
         item.addEventListener('mouseleave', () => onHover(null)); // Clear the hover state on leave
      });
    };

    const lerp = (a, b, n) => n * (a - b) + b;

    const distanceZ = (widthElement, length, gap) => {
      return widthElement / 2 / Math.tan(Math.PI / length) + gap;
    };

    const calculateHeight = (z) => {
      const t = Math.atan((90 * Math.PI) / 180 / 2);
      return t * 2 * z;
    };

    const getPosX = (x) => {
      currentMousePos = x;
      moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
      lastMousePos = currentMousePos;
    };

    const update = () => {
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      carrossel.style.setProperty("--rotatey", lastMoveTo + "deg");
      requestAnimationFrame(update);
    };

    const onResize = () => {
      const boundingCarrossel = containerCarrossel.getBoundingClientRect();
      return {
        w: boundingCarrossel.width,
        h: boundingCarrossel.height,
      };
    };

    const initEvents = () => {
      carrossel.addEventListener("mousedown", () => {
        isMouseDown = true;
        carrossel.style.cursor = "grabbing";
      });
      carrossel.addEventListener("mouseup", () => {
        isMouseDown = false;
        carrossel.style.cursor = "grab";
      });
      container.addEventListener("mouseleave", () => (isMouseDown = false));
      carrossel.addEventListener("mousemove", (e) => isMouseDown && getPosX(e.clientX));
      carrossel.addEventListener("touchstart", () => {
        isMouseDown = true;
        carrossel.style.cursor = "grabbing";
      });
      carrossel.addEventListener("touchend", () => {
        isMouseDown = false;
        carrossel.style.cursor = "grab";
      });
      container.addEventListener("touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX));
      window.addEventListener("resize", createCarrossel);
      update();
      createCarrossel();
    };

    initEvents();
  }, [onHover]);

  return (
    <div className="conteudo__geral">
      <div className="container">
        <div className="container-carrossel">
          <div className="carrossel">
            <div 
            style={{
              backgroundImage: "url('/bookastaypic.jpg')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
            }}
              className="carrossel-item"
              id='cr_main'>
              
            </div>
            <div className="carrossel-item">hi2</div>
            <div className="carrossel-item">hi3</div>
            <div className="carrossel-item">hi4</div>
            <div className="carrossel-item">hi5</div>
            <div className="carrossel-item">hi6</div>
            <div className="carrossel-item">hi7</div>
            <div className="carrossel-item">hi8</div>
            <div className="carrossel-item">hi10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
