const Available = ({ availablePlayers, players }) => {

    return (
        <div className='flex justify-between px-3 my-10'>
            {/* <h2 className='font-bold text-[28px]'>{availablePlayers} : {players ? players.length : ''}</h2> */}
            <h2 className='font-bold text-[28px]'>{availablePlayers} {players ? `: ${players.length}` : ''}</h2>
            <div className='rounded-md border-[2px]'>
                <button className='font-bold bg-[#E7FE29] px-[20px] py-[8px]'>Available</button>
                <button className='px-[20px] py-[8px]'>Selected(0)</button>
            </div>
        </div>
    );
};

export default Available;