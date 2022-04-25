import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import FlyingBlob from "./FlyingBlob";
import MainPicture from "../assets/main_picture@3x.png";
import { ReactComponent as AnimatedBg } from "../assets/animatedBg.svg";
import NavIcons from "../navigation/NavIcons";

import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  return (
    <div id="home" className="welcome">
      <div className="welcome__text">
        <h2>I'm Kaja.</h2>
        <p>Junior React Developer</p>
      </div>

      <img className="welcome__picture" src={MainPicture} alt=""/>
      <div className="welcome__bg">
        <AnimatedBg />
      </div>
      <div className="welcome__blobs">
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[-9, -40, 1]}
            intensity={0.6}
            color="white"
          />
          <Suspense fallback={null}>
            <FlyingBlob
              position={[0, -1, 0]}
              scale={0.45}
              color="#00ead3"
              distort={0.8}
              speed={2}
              roughness={0.7}
            />
            <FlyingBlob
              position={[-1, -2.4, 0]}
              scale={0.25}
              color="#00EAD3"
              distort={0.7}
              speed={1.9}
              roughness={0.4}
            />
            <FlyingBlob
              position={[0.2, 0.4, 0]}
              scale={0.3}
              color="#88fff7"
              distort={0.5}
              speed={1.2}
              roughness={0.4}
            />
            <FlyingBlob
              position={[-2.6, -0.6, 0]}
              scale={1.1}
              color="#88FFF7"
              distort={0.9}
              speed={1.2}
              roughness={0.7}
            />
            <FlyingBlob
              position={[1.8, -0.5, 0]}
              scale={0.8}
              color="darkturquoise"
              distort={0.6}
              speed={1.5}
              roughness={0.5}
            />
            <FlyingBlob
              position={[0.9, -2, 0]}
              scale={0.35}
              color="#88FFF7"
              distort={0.6}
              speed={1.5}
              roughness={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="welcome__nav-icons">
        <NavIcons />
      </div>
    </div>
  );
};

export default WelcomeScreen;
