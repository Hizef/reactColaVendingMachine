import React from 'react';

function ColaStackItem({ cola }) {
  return (
    <li className="colaStackItem">
      <img src={cola.image} alt={cola.name} className="imageItem" />
      <strong className="textItem">{cola.name}</strong>
      <span className="countCola">{cola.count}</span>
    </li>
  );
}

export default ColaStackItem;
