import React from 'react';
import './style.css';

export default function App() {
  let a1 = [1, 2, 3, 4, 5];
  return <div>{a1.map((item) => item % 2 === 0 && <h1> {item} </h1>)}</div>;
}
