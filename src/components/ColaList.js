import React from 'react';
import ColaButton from './ColaButton';

function ColaList({ colas, selectedColas, setSelectedColas }) {
  const handleSelectCola = (cola) => {
    const updatedSelectedColas = [...selectedColas];
    const existingCola = updatedSelectedColas.find((selectedCola) => selectedCola.name === cola.name);

    if (existingCola) {
      existingCola.count++;
    } else {
      updatedSelectedColas.push({ ...cola, count: 1 });
    }

    setSelectedColas(updatedSelectedColas);
  };

  return (
    <ul className="listCola">
      {colas.map((cola) => (
        <li key={cola.id}>
          <ColaButton cola={cola} onSelect={handleSelectCola} />
        </li>
      ))}
    </ul>
  );
}

export default ColaList;
