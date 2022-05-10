import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor.randomColor());
  // const [hue, setHue] = useState(randomColor.hue());

  return (
    <div className="Generator">
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
      <br />
      <br />
      <div style={{ backgroundColor: color, width: '300px', height: '300px' }}>
        Generated Color: {color}
      </div>
      <br />
      {/* <div>
        <input
          value={hue}
          onChange={(event) => setHue(event.randomColor.hue())}
        />
      </div> */}
    </div>
  );
}
