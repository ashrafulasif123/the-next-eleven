// import React from 'react';
import { use } from 'react';
import Player from '../Player/Player';

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    // console.log(players)
    return (
        <div className='grid grid-cols-4 gap-3'>
            {
                players.map(player => <Player key={player.playerId} player={player}></Player>)
            }
        </div>
    );
};

export default Players;