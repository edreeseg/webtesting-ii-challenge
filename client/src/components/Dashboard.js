import React, { useState } from 'react';
import Display from './Display';

export default function Dashboard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const handleStrike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const handleBall = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };
  const handleFoul = () => {
    if (strikes < 2) setStrikes(strikes + 1);
  };
  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  };
  return (
    <section>
      <Display strikes={strikes} balls={balls} />
      <button onClick={handleStrike}>Strike!</button>
      <button onClick={handleBall}>Ball!</button>
      <button onClick={handleFoul}>Foul!</button>
      <button onClick={handleHit}>Hit!</button>
    </section>
  );
}
