import React, { useEffect } from "react";

function BreakTimer({ onBreakComplete }) {

  useEffect(
    function () {
      let interval = setInterval(() => {
        clearInterval(interval);
        onBreakComplete();
      }, 30000);
      return () => clearInterval(interval);
    },
    [onBreakComplete]
  );

  return (
    <div>
      <h2>Break</h2>
      <p>5 Minutes Break</p>
    </div>
  );
}

export default BreakTimer;
