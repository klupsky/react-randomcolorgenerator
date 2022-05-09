import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor.randomColor());

  return (
    <div className="Generator" style={{ backgroundColor: color }}>
      <button onClick={() => setColor(randomColor.randomColor())}>
        make new color
      </button>
      <br />
      Generated Color: {color}
    </div>
  );
}

export default App;
