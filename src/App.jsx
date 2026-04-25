import './App.css'
import namImg from './assets/logo.png'
import dollar from './assets/dollar-1.png';
import Players from './components/Players/Players';
import { Suspense } from 'react';

function App() {

  const playersPromise = fetch('players.json')
    .then(res => res.json())

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
            <span>6000000000</span>
            <span>Coin</span>
            <img src={dollar} alt="" />
          </div>
        </div>
        <div>

          <div>
            {
              <Suspense fallback={<p>Players Are Loading.....</p>}>
                <Players playersPromise={playersPromise}></Players>
              </Suspense>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
