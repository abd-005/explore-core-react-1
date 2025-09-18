import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Explore Core React <span style={{fontSize:'18px', fontWeight:'600'}}>(Part 1)</span></h1>
      </div>
      <div>
        <Person></Person>
        <Person></Person>
        <Sports></Sports>
        <Person></Person>
        <Person></Person>
      </div>

    </>
  )
}

function Sports() {
  return (
    <div className="beautify">
      <h3>Cricket</h3>
      <ul>
        <li>kola</li>
        <li>komola</li>
      </ul>
    </div>
  );
}

 function Person() {
  const age = 17;
  const name = "jolil";

  const presonStyle = {
    color: "red",
    backgroundColor: "lightGreen",
  };
  return (
    <p className="beautify" style={presonStyle}>
      I am a Person: {name} {age}
    </p>
  );
}

export default App
