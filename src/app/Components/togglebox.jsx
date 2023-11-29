"use client";
import { useState } from "react";

export default function Toggle() {
  const [isBlue, setBlue] = useState("false");
  function toggleBox() {
    setBlue(!isBlue);
  }
  return (
    <main>
      <hr />
      <h1>Toggle</h1>
      <div
        className={isBlue ? "blue-box" : "white-box"}
        onClick={() => {
          toggleBox();
        }}
      ></div>
    </main>
  );
}
