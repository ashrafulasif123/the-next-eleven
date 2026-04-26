const Available = ({ players, selectedPlayers, selectedPlayerText }) => {

    return (
        <div className='flex justify-between px-3 my-10'>
            <h2 className='font-bold text-[28px]'>{players ? `Available Players: ${players.length} ` : ''} {selectedPlayerText ? `Selected Player: ${selectedPlayers.length}` : ''}</h2>
            <div className='rounded-md border-[2px]'>
                <button className='font-bold bg-[#E7FE29] px-[20px] py-[8px]'>Available</button>
                <button className='px-[20px] py-[8px]'>{`Selected(${selectedPlayers.length})`}</button>
            </div>
        </div>
    );
};

export default Available;