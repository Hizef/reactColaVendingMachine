import React, { useState } from 'react';
import VendingMachine from './components/VendingMachine';
import MyInfo from './components/MyInfo';
import './styles/reset.css';
import './App.css';

function App() {
  const [myMoney, setMyMoney] = useState(25000);
  const [balance, setBalance] = useState(0);
  const [selectedColas, setSelectedColas] = useState([]);
  const [acquiredColas, setAcquiredColas] = useState([]);

  return (
    <div id="container">
      <header>
        <h2 className="ir">ColaCola Logo</h2>
        <img src="./image/logo_1.png" alt="로고 이미지" />
      </header>
      <main>
        <VendingMachine
          myMoney={myMoney}
          setMyMoney={setMyMoney}
          balance={balance}
          setBalance={setBalance}
          selectedColas={selectedColas}
          setSelectedColas={setSelectedColas}
          acquiredColas={acquiredColas}
          setAcquiredColas={setAcquiredColas}
        />
        <MyInfo myMoney={myMoney} acquiredColas={acquiredColas} />
      </main>
    </div>
  );
}

export default App;
