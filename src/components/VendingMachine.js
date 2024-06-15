import React, { useState } from 'react';
import ColaList from './ColaList';
import ColaSelected from './ColaSelected';

const colas = [
  { id: 1, name: 'Red Cola', price: 1000, image: './image/cola_red.png' },
  { id: 2, name: 'Violet Cola', price: 1000, image: './image/cola_violet.png' },
  { id: 3, name: 'Yellow Cola', price: 1000, image: './image/cola_yellow.png' },
  { id: 4, name: 'Cool Cola', price: 1000, image: './image/cola_cool.png' },
  { id: 5, name: 'Green Cola', price: 1000, image: './image/cola_green.png' },
  { id: 6, name: 'Orange Cola', price: 1000, image: './image/cola_orange.png' },
];

function VendingMachine({
  myMoney,
  setMyMoney,
  balance,
  setBalance,
  selectedColas,
  setSelectedColas,
  acquiredColas,
  setAcquiredColas,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleInsertMoney = () => {
    const amount = parseInt(inputValue);
    if (!isNaN(amount) && amount > 0 && amount <= myMoney) {
      setMyMoney(myMoney - amount);
      setBalance(balance + amount);
      setInputValue('');
    }
  };

  const handleReturnMoney = () => {
    setMyMoney(myMoney + balance);
    setBalance(0);
  };

  const handleGetColas = () => {
    const totalCost = selectedColas.reduce((total, cola) => total + cola.price * cola.count, 0);
    if (balance >= totalCost) {
      setBalance(balance - totalCost);
      const updatedAcquiredColas = [...acquiredColas];

      selectedColas.forEach((selectedCola) => {
        const existingCola = updatedAcquiredColas.find((cola) => cola.name === selectedCola.name);
        if (existingCola) {
          existingCola.count += selectedCola.count;
        } else {
          updatedAcquiredColas.push(selectedCola);
        }
      });

      setAcquiredColas(updatedAcquiredColas);
      setSelectedColas([]);
    }
  };

  return (
    <section className="vendingMachine">
      <h2 className="ir">vendingMachine</h2>
      <ColaList colas={colas} selectedColas={selectedColas} setSelectedColas={setSelectedColas} />
      <div className="balanceReturn">
        <div className="balanceInfo">
          잔액: <span className="balanceText">{balance}원</span>
        </div>
        <button type="button" className="btnReturn" onClick={handleReturnMoney}>
          거스름돈 반환
        </button>
      </div>
      <div className="balanceInsert">
        <input
          type="number"
          className="insertInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="입금액 입력"
        />
        <button className="btnInsert" onClick={handleInsertMoney}>
          입금
        </button>
      </div>
      <div className="colaSelected">
        <ColaSelected selectedColas={selectedColas} />
        <button type="button" className="btnGet" onClick={handleGetColas}>
          획득
        </button>
      </div>
    </section>
  );
}

export default VendingMachine;
