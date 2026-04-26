const Available = ({ players, selectedPlayers, selectedPlayerText, handleView, availableOrNot }) => {

    return (
        <div className='flex justify-between px-3 my-10'>
            <h2 className='font-bold text-[28px]'>{players ? `Available Players: ${players.length} ` : ''} {selectedPlayerText ? `Selected Player: ${selectedPlayers.length}` : ''}</h2>
            
            <div className='rounded-md border-[2px]'>
<button onClick={() => handleView('available')} className={`font-bold px-[20px] py-[8px] ${availableOrNot === 'available' ? 'bg-[#E7FE29]' : ''}`}>Available</button>
<button onClick={() => handleView('selected')} className={`font-bold px-[20px] py-[8px] ${availableOrNot === 'selected' ? 'bg-[#E7FE29]' : ''}`}> {`Selected(${selectedPlayers.length})`}</button>
            </div>
        </div>
    );
};

export default Available;