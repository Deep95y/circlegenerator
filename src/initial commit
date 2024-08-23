import { useState, useEffect } from "react";

const CreateCircle = () => {
  const [color, setColor] = useState("#6495ED");
  const [radius, setRadius] = useState(30);
  const [position, setPosition] = useState({top:0, left:0});
  
  useEffect(() => {
    const randomColor = getRandomColor();
    setColor(randomColor);

    const randomradius = getRandomradius(20, 50);
    setRadius(randomradius);

     const randomposition = getRandomposition(window.innerWidth, window.innerHeight, randomradius );
     setPosition(randomposition);
  }, []);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomradius(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   function getRandomposition(maxWidth, maxHeight, radius) {
    const top = Math.random() * (maxHeight -4 * radius);
    const left = Math.random() * (maxWidth - 4* radius);
    return {top, left};


  const Styledefined = {
    backgroundColor: color,
    width: `${radius * 4}px`,
    height: `${radius * 4}px`,
    borderRadius: "50%",
    border: "1px solid blue",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    left: `${position.left}px`,
    top:`${position.top}px`,
    position:'absolute',
    
  };

//   const container = document.querySelector('.circle-container');
//   const width = container.offsetWidth;
//   const height = container.offsetHeight;

  return (
    <>
      <div style={Styledefined} className="circle-container"></div>
    </>
  );
};

export default CreateCircle;
