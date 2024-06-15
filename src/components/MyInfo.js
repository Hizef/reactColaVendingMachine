import React from 'react';
import ColaStackItem from './ColaStackItem';

function MyInfo({ myMoney, acquiredColas }) {
  const totalCost = acquiredColas.reduce((total, cola) => total + cola.price * cola.count, 0);

  return (
    <section className="myInfo">
      <h2 className="ir">My Info</h2>
      <div className="myBalance">
        <div className="myMoney">
          소지금 : <span className="myMoneyText">{myMoney}원</span>
        </div>
      </div>
      <div className="getCola">
        <strong className="getColaTitle">획득한 음료</strong>
        <ul className="colaStack">
          {acquiredColas.map((cola) => (
            <ColaStackItem key={cola.name} cola={cola} />
          ))}
        </ul>
        <div className="total">
          <strong className="totalMoney">총금액 : </strong>
          <span className="totalMoneyText">{totalCost}원</span>
        </div>
      </div>
    </section>
  );
}

export default MyInfo;
