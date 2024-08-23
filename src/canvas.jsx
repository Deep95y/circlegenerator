import "./index.css";
import CreateCircle from "./createcircle";
import React, { useState } from "react";

const CanvasComponent = () => {
  const [circles, setCircles] = useState([]);
  const generate = Array(1).fill(null);
  const [clicked, setClicked] = useState(false);

  const handleCreate = () => {
    setClicked(true);
    setCircles([...circles, generate]);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          background: "grey",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "3rem",
            width: "9rem",
            borderRadius: "1rem",
            borderStyle: "none",
            background: "blueviolet",
            color: "white",
            marginLeft: "2rem",
            marginTop: "3rem",
            textAlign: "center",
            paddingTop: "1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleCreate}
        >
          Generate circles
        </div>

        {clicked ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {circles.map((circle) => (
              <CreateCircle key={circle.id} className = "circle" style={{ marginTop: "1rem" }} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CanvasComponent;
