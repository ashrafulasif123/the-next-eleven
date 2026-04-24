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
      <div className="max-w-[1350px] mx-auto">
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
          <div className='flex justify-between px-3 mb-6'>
            <h2 className='font-bold text-[28px]'>Available Players</h2>
            <div className='rounded-md border-[2px]'>
              <button className='font-bold bg-[#E7FE29] px-[20px] py-[8px]'>Available</button>
              <button className='px-[20px] py-[8px]'>Selected(0)</button>
            </div>
          </div>
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
