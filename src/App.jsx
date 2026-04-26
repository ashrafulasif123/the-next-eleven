import './App.css'
import namImg from './assets/logo.png'
import dollar from './assets/dollar-1.png';
import Players from './components/Players/Players';
import { Suspense, useEffect, useState } from 'react';
import { getRemainingBalanceFromLs, setRemainingBalanceToLs } from './utilities/localstorage';

function App() {

  const playersPromise = fetch('players.json')
    .then(res => res.json())

  const [remainingBalance, setRemainignBalance] = useState(6000000000)

  useEffect(() => {
    const remainingBalance = getRemainingBalanceFromLs()
    setRemainignBalance(remainingBalance)
  }, [])
  // console.log(remainingBalance)

  const handleBuyPlayer = (playerPrice) => {
    if (remainingBalance < playerPrice) return alert("You have not enough balance to select this player")
    const updateRemainingBalance = remainingBalance - playerPrice
    setRemainignBalance(updateRemainingBalance)
    setRemainingBalanceToLs(updateRemainingBalance)
  }

  const handleRemovePlayer = (playerPrice) => {
    const updateRemainingBalance = remainingBalance + playerPrice
    setRemainignBalance(updateRemainingBalance)
    setRemainingBalanceToLs(updateRemainingBalance)
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="navbar">
          <div className="flex-1">
            <a className=" text-xl">
              <img className='w-[60px] h-[60px]' src={namImg} alt="" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>{remainingBalance}</span>
            <span>Coin</span>
            <img src={dollar} alt="" />
          </div>
        </div>
        <div>

          <div>
            {
              <Suspense fallback={<p>Players Are Loading.....</p>}>
                <Players playersPromise={playersPromise} handleBuyPlayer={handleBuyPlayer} handleRemovePlayer={handleRemovePlayer}></Players>
              </Suspense>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
