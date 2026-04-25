// import React from 'react';
import { use, useEffect, useState } from 'react';
import Player from '../Player/Player';
import Available from '../Available';
import { getIdFromLs, saveLocalStorage, setIdToLs } from '../../utilities/localstorage';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise)

    const [playerIds, setPlayerId] = useState([])
    

    useEffect(() => {
        const playerIds = getIdFromLs()
        setPlayerId(playerIds)
    }, [])

    const handlePlayer = (id) => {
        if (playerIds.includes(id)) {
            const updatePlayerIds = playerIds.filter(playerId => playerId !== id)
            setPlayerId(updatePlayerIds)
            saveLocalStorage(updatePlayerIds)
        }
        else {
            setPlayerId([...playerIds, id])
            setIdToLs(id)
        }
    }


    const selectedPlayers = players.filter(player => playerIds.includes(player.id))
    console.log(selectedPlayers)

    return (
        <>
            <Available availablePlayers='Available Players' players={players}></Available>
            <div className='grid grid-cols-4 gap-3'>
                {
                    players.map(player => <Player key={player.playerId} player={player} handlePlayer={handlePlayer} playerIds={playerIds} ></Player>)
                }
            </div>
            <Available availablePlayers='Selected Players(4/5)'></Available>

        </>

    );
};

export default Players;