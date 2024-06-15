import React from 'react';

function ColaButton({ cola, onSelect }) {
  return (
    <button
      className="btnCola"
      onClick={() => onSelect(cola)}
      data-item={cola.name}
      data-count="1"
      data-price={cola.price}
      data-image={cola.image}
    >
      <img src={cola.image} alt={cola.name} />
      <strong>{cola.name}</strong>
      <span>{cola.price}원</span>
    </button>
  );
}

export default ColaButton;
