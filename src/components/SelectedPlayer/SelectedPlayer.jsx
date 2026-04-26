const SelectedPlayer = ({ selectedPlayer, handlePlayer }) => {

    const { player_img, player_name, batting_style } = selectedPlayer
    return (
        <div className="flex items-center justify-between p-3 border rounded-lg shadow-sm hover:bg-gray-50">

            {/* Left Side */}
            <div className="flex items-center gap-4">

                {/* Image */}
                <img
                    src={player_img}
                    alt="player"
                    className="w-14 h-14 rounded-full object-cover"
                />

                {/* Name + Role */}
                <div>
                    <h2 className="font-semibold text-lg">{player_name}</h2>
                    <p className="text-sm text-gray-500">{batting_style}</p>
                </div>
            </div>

            {/* Right Side (Delete) */}
            <button onClick={() => handlePlayer(selectedPlayer)} className="text-red-500 hover:text-red-700 text-xl">
                🗑️
            </button>
        </div>
    );
};

export default SelectedPlayer;