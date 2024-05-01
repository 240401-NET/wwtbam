import React from 'react'

import LadderRung from './LadderRung'

const GameInfoSidebar = () => {
  const rungClass = "flex justify-between text-white text-2xl font-semibold tracking-widest pl-4 pr-8"
  return (
    <div className=" flex flex-col mt-12 gap-y-6 bg-black bg-opacity-70 w-72 border border-4 border-sky-400 rounded-xl">
      <div className='py-6 flex flex-col gap-y-2'>
      <div className="hover:text-white hover:bg-amber-500">
        <div className={rungClass}>
          <p className="">15</p>
          <p>1 MILLION</p>
        </div>
        </div>
        <LadderRung round={14} completed={false} amount={750000} />
        <LadderRung round={13} completed={false} amount={500000} />
        <LadderRung round={12} completed={false} amount={125000} />
        <LadderRung round={11} completed={false} amount={64000} />
        <div className=" hover:bg-amber-500">
        <div className={rungClass}>
          <p className="">10</p>
          <p>$32,000</p>
        </div>
        </div>
        <LadderRung round={9} completed={false} amount={16000} />
        <LadderRung round={8} completed={false} amount={8000} />
        <LadderRung round={7} completed={false} amount={4000} />
        <LadderRung round={6} completed={false} amount={2000} />
        <div className="hover:bg-amber-500">
        <div className={rungClass}>
          <p className="">5</p>
          <p>$1,000</p>
        </div>
        </div>
        <LadderRung round={4} completed={false} amount={400} />
        <LadderRung round={3} completed={false} amount={300} />
        <LadderRung round={2} completed={false} amount={200} />
        <LadderRung round={1} completed={false} amount={100} />
        </div>
    </div>
  )
}

export default GameInfoSidebar