import { useEffect, useState } from 'react';
import backdrop from '../assets/wallpaper.webp'
import { Game } from "../models/Game";
import { SingleGameTableRow } from '../components/SingleGameTableRow';
import Navbar from '../components/Navbar';

const Leaderboard = () => {

    let[leaderboardState, setLeaderboardState] = useState<Game[]>([]);
    useEffect(()=>{getLeaderboard()}, []);
    const getLeaderboard = async () => {
        fetch("https://wwtbam.azurewebsites.net/api/game/highest/10")
        // fetch("http://localhost:5211/api/game/highest/10")
        .then(response => {return response.json()})
        .then(data => setLeaderboardState(data))
        .catch(error => console.log(error));
    }

    return (
        <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${backdrop})` }}>
            <Navbar />
            <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">Leaderboard</h1>
            <div className="flex items-center justify-center h-[calc(100vh-22rem)]">
            <table className="table-auto bg-white rounded-xl shadow-md" style={{opacity: 0.9}}> 
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 font-semibold text-gray-700">Place</th>
                            <th className="py-2 px-4 font-semibold text-gray-700">Name</th>
                            <th className="py-2 px-4 font-semibold text-gray-700">Score</th>
                            <th className="py-2 px-4 font-semibold text-gray-700">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardState.map((game, index) =>
                            <SingleGameTableRow key={game.gameId} data={game} place={index + 1}></SingleGameTableRow>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard