import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(randomColor());
  const colorCreate = randomColor({ hue: hue, luminosity: luminosity });

  return (
    <div
      className="Generator"
      style={{
        backgroundColor: colorCreate,
        transition: 'all .5s ease',
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: '35%',
        }}
      >
        <button
          style={{ backgroundColor: 'white', border: 'none', padding: '10px' }}
          onClick={() => setColor(colorCreate)}
        >
          Generate
        </button>

        <br />
        <br />
        <div>Generated Color: {colorCreate}</div>
        <br />
        <div>
          add hue:
          <br />
          <input
            style={{ border: 'none' }}
            value={hue}
            onChange={(event) => setHue(event.currentTarget.value)}
          />
        </div>
        <br />
        <div>
          add luminosity: <br />
          <input
            style={{ border: 'none' }}
            value={luminosity}
            onChange={(event) => setLuminosity(event.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
}
