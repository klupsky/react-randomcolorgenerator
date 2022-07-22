import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  return (
    <div
      id="Generated Color: <background color hex code>"
      className="DivStyle"
      style={{
        backgroundColor: color,
        transition: 'all .5s ease',
      }}
    >
      {' '}
      <br />
      <br />
      <button
        className="button"
        onClick={() =>
          setColor(randomColor({ hue: hue, luminosity: luminosity }))
        }
      >
        Generate
      </button>
      <br />
      <br />
      <div>Generated Color: {color}</div>
      <br /> <br /> <br />
      add hue:
      <br />
      <input
        style={{ border: 'none' }}
        value={hue}
        onChange={(event) => setHue(event.currentTarget.value)}
      />
      <br />
      add luminosity: <br />
      <input
        style={{ border: 'none' }}
        value={luminosity}
        onChange={(event) => setLuminosity(event.currentTarget.value)}
      />
    </div>
  );
}
