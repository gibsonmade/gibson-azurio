"use client";
import { LiquidMetal } from "@paper-design/shaders-react";

export default function LogoLiquidMetal() {
  return (
    <LiquidMetal
      speed={1}
      softness={0.3}
      repetition={3.29}
      shiftRed={0.3}
      shiftBlue={0.3}
      distortion={0.07}
      contour={0.4}
      scale={0.7}
      rotation={0}
      shape="diamond"
      angle={70}
      image="/img-temp/uploads/gibsooon-text.svg"
      colorBack="#00000000"
      colorTint="#FFFFFF"
      style={{ height: "44px", width: "180px" }}
    />
  );
}
