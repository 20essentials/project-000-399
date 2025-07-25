/** @jsxImportSource react */
import React, { StrictMode, useEffect } from "react";
import { styled } from "@linaria/react";
import { createRoot } from "react-dom/client";

const GlobalStyle = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
`;

const Temp = styled.article`
  position: absolute;
  background-size: cover;
  transition: clip-path 2s ease-out, width 2s ease-out, height 2s ease-out;

  &.temp1 {
    background-image: url("assets/n1.avif");
    top: 0;
    background-position: top;
    clip-path: polygon(0 0, 100% 0%, 50% 100%);
    z-index: 3;
    width: 100%;
    height: 50vh;
  }

  &.temp2 {
    background-image: url("assets/n2.avif");
    bottom: 0;
    background-position: bottom;
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    width: 100%;
    height: 50vh;
  }

  &.temp3 {
    background-image: url("assets/n3.avif");
    left: 0;
    background-position: left;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    width: 50vw;
    height: 100vh;
  }

  &.temp4 {
    background-image: url("assets/n4.avif");
    right: 0;
    background-position: right;
    clip-path: polygon(100% 0%, 0 50%, 100% 100%);
    width: 50vw;
    height: 100vh;
  }

  &.active {
    width: 100%;
    height: 100vh;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: 20;
  }
`;

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains("temp")) {
        e.target.classList.toggle("active");
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <GlobalStyle>
      <Temp className="temp temp1" />
      <Temp className="temp temp2" />
      <Temp className="temp temp3" />
      <Temp className="temp temp4" />
    </GlobalStyle>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
