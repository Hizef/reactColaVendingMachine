import React from 'react';
import ColaStackItem from './ColaStackItem';

function ColaSelected({ selectedColas }) {
  return (
    <div className="colaSelected">
      <ul className="colaStack">
        {selectedColas.map((cola) => (
          <ColaStackItem key={cola.name} cola={cola} />
        ))}
      </ul>
    </div>
  );
}

export default ColaSelected;
