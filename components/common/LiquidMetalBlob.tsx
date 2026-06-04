"use client";
import { LiquidMetal } from "@paper-design/shaders-react";

export default function LiquidMetalBlob() {
  return (
    <LiquidMetal
      speed={1}
      softness={0.1}
      repetition={2}
      shiftRed={0.3}
      shiftBlue={0.3}
      distortion={0.07}
      contour={0.4}
      scale={0.85}
      rotation={0}
      shape="metaballs"
      angle={70}
      frame={35756.699999999255}
      colorBack="#00000000"
      colorTint="#DDEAF0"
      style={{ height: "353px", width: "353px" }}
    />
  );
}
