"use client";
import { useState } from "react";

export default function Race() {
  const [drive, setDrive] = useState(0);

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      let num = drive + 5;
      setDrive(num);
    } else if (e.key === "ArrowLeft") {
      let num = drive - 5;
      setDrive(num);
    }
  }

  return (
    <div>
      <h1>Race</h1>
      <p>move the car</p>
      <div
        tabIndex="0"
        onKeyDown={handleKeyDown}
        id="car"
        style={{ marginLeft: `${drive}px` }}
      >
        🏎️
      </div>
    </div>
  );
}
