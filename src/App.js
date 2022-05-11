import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  return (
    <div
      className="Generator"
      style={{
        backgroundColor: color,
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
          style={{ border: 'none', backgroundColor: 'white', padding: '10px' }}
          onClick={() =>
            setColor(randomColor({ hue: hue, luminosity: luminosity }))
          }
        >
          Generate
        </button>

        <br />
        <br />
        <div>Generated Color: {color}</div>
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
