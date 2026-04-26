
const Player = ({ player, handlePlayer, playerIds }) => {
    // console.log(player)
    const { id, player_img, player_name, player_country, playing_role, price, batting_style, bowling_style, rating } = player
    const isSelected = playerIds.includes(id)

    return (
        <div className="flex justify-center items-center bg-gray-100 p-2">
            {/* Main Card Container */}
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">

                {/* Top Image Section */}
                <div className="relative h-72">
                    <img
                        src={player_img}
                        alt="Mustafizur Rahman"
                        className="w-full h-full object-cover"
                    />
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                        <span className="text-yellow-600 font-bold text-sm">⭐ 9.3 {rating}</span>
                    </div>
                    {/* Bottom Gradient Overlay */}
                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                        <h2 className="text-2xl font-bold text-white tracking-wide">{player_name}</h2>
                        <p className="text-gray-300 text-sm flex items-center gap-1">
                            {player_country}
                        </p>
                    </div>
                </div>

                {/* Info Section */}
                <div className="p-2 space-y-5">
                    {/* Role & Style */}
                    <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                        <div>
                            <p className="text-gray-400 font-medium uppercase tracking-tighter text-[10px]">Playing Role</p>
                            <p className="text-gray-800 font-bold">{playing_role}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 font-medium uppercase tracking-tighter text-[10px]">Batting Style</p>
                            <p className="text-gray-800 font-bold">{batting_style}</p>
                        </div>
                    </div>

                    {/* Bowling Style */}
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <p className="text-gray-400 font-medium uppercase tracking-tighter text-[10px]">Bowling Style</p>
                        <p className="text-gray-800 font-semibold">{bowling_style}</p>
                    </div>

                    {/* Price Section */}
                    <div className="flex justify-between items-center bg-blue-600 rounded-2xl p-4 text-white shadow-lg shadow-blue-200">
                        <div>
                            <p className="text-blue-100 text-xs font-medium">Market Price</p>
                            <p className="text-xl font-black">{price}</p>
                        </div>
                        <button onClick={() => handlePlayer(player)} className="bg-white text-blue-600 font-bold px-2 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                            {isSelected ? 'Remove Player' : 'Choose Player'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;