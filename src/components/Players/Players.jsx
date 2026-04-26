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

    const selectedPlayers = players.filter(player => playerIds.includes(player.id))
    return (
        <>
            <Available players={players} selectedPlayers={selectedPlayers}></Available>
            <div className='grid grid-cols-4 gap-3'>
                {
                    players.map(player => <Player key={player.id} player={player} handlePlayer={handlePlayer} playerIds={playerIds} ></Player>)
                }
            </div>
            <Available selectedPlayers={selectedPlayers} selectedPlayerText></Available>
            <div>
                {
                    selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer}></SelectedPlayer>)
                }
            </div>

        </>

    );
};

export default Players;