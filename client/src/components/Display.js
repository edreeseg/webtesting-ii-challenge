import React from 'react';

export default function Display(props) {
  return (
    <section>
      <p>Strikes: {props.strikes || 0}</p>
      <p>Balls: {props.balls || 0}</p>
    </section>
  );
}
