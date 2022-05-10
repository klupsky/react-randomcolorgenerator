import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(randomColor());
  const colorCreate = randomColor({ hue: hue, luminosity: luminosity });

  return (
    <div className="Generator">
      <button onClick={() => setColor(colorCreate)}>Generate</button>

      <br />
      <br />
      <div
        style={{
          backgroundColor: colorCreate,
          width: '300px',
        }}
      >
        Generated Color: {colorCreate}
      </div>
      <br />
      <div>
        add hue:
        <br />
        <input
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
      </div>
      <br />
      <div>
        add luminosity: <br />
        <input
          value={luminosity}
          onChange={(event) => setLuminosity(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
