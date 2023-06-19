import React from "react";
import Wave from "react-wavify";
function WaterFooter() {
  return (
    <Wave
      fill="#4db8d5"
      paused={false}
      options={{
        height: 10,
        amplitude: 20,
        speed: 0.15,
        points: 3,
      }}
    />
  );
}

export default WaterFooter;
