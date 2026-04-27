// import React from 'react';
import { use, useEffect, useState } from 'react';
import Player from '../Player/Player';
import Available from '../Available';
import { getIdFromLs, saveLocalStorage, setIdToLs } from '../../utilities/localstorage';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Players = ({ playersPromise, handleBuyPlayer, handleRemovePlayer }) => {
    const players = use(playersPromise)

    const [playerIds, setPlayerId] = useState([])



    useEffect(() => {
        const playerIds = getIdFromLs()
        setPlayerId(playerIds)
    }, [])

    // const selectedLimitation = 6
    const handlePlayer = (player) => {
        if (playerIds.includes(player.id)) {
            const updatePlayerIds = playerIds.filter(playerId => playerId !== player.id)
            setPlayerId(updatePlayerIds)
            saveLocalStorage(updatePlayerIds)
            handleRemovePlayer(player.price)
        }
        else {
            if (playerIds.length >= 6) return alert('Your limit is 6')
            setPlayerId([...playerIds, player.id])
            setIdToLs(player.id)
            handleBuyPlayer(player.price)
        }
    }

    const [availableOrNot, setAvailableOrNot] = useState('available')
    useEffect(() => {
        const check = localStorage.getItem("view")
        setAvailableOrNot(check)
    }, [])


    const handleView = (playerList) => {
        // const view = playerList
        setAvailableOrNot(playerList)
        localStorage.setItem("view", playerList)
    }

    const selectedPlayers = players.filter(player => playerIds.includes(player.id))
    return (
        <>
            <div className='pb-10'>
                {
                    availableOrNot === 'available'
                        ?
                        <div>
                            <Available players={players} selectedPlayers={selectedPlayers} handleView={handleView} availableOrNot={availableOrNot}></Available>
                            <div className='grid grid-cols-4 gap-3'>
                                {
                                    players.map(player => <Player key={player.id} player={player} handlePlayer={handlePlayer} playerIds={playerIds} ></Player>)
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <Available selectedPlayers={selectedPlayers} selectedPlayerText handleView={handleView} availableOrNot={availableOrNot}></Available>
                            <div>
                                {
                                    selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handlePlayer={handlePlayer}></SelectedPlayer>)
                                }
                            </div>
                            <div className='border rounded-xl inline-block p-1 mt-10'>
                                <button onClick={() => handleView('available')} className='font-bold bg-[#E7FE29] px-[20px] py-[8px] rounded-xl'>Add More Player</button>
                            </div>
                        </div>
                }
            </div>
        </>

    );
};

export default Players;