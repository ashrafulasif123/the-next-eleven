// import React from 'react';
import { use, useEffect, useState } from 'react';
import Player from '../Player/Player';
import Available from '../Available';
import { getIdFromLs, setIdToLs } from '../../utilities/localstorage';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise)

    const [playerIds, setPlayerId] = useState([])

    useEffect(() => {
        const playerIds = getIdFromLs()
        setPlayerId(playerIds)
    }, [])

    const handleChoosePlayer = (id) => {
        setPlayerId([...playerIds, id])
        setIdToLs(id)
    }

    const selectedPlayers = players.filter(player => playerIds.includes(player.playerId))

    console.log(selectedPlayers)
    return (
        <>
            <Available availablePlayers='Available Players' players={players}></Available>
            <div className='grid grid-cols-4 gap-3'>
                {
                    players.map(player => <Player key={player.playerId} player={player} handleChoosePlayer={handleChoosePlayer}></Player>)
                }
            </div>
            <Available availablePlayers='Selected Players(4/5)'></Available>

        </>

    );
};

export default Players;