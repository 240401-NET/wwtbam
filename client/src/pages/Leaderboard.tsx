import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Game } from "../models/Game";
import { SingleGameTableRow } from '../components/SingleGameTableRow';

const Leaderboard = () => {

    let[leaderboardState, setLeaderboardState] = useState<Game[]>([]);
    useEffect(()=>{getLeaderboard()}, []);
    const getLeaderboard = async () => {
        // fetch("https://wwtbam.azurewebsites.net/api/game/highest/10")
        fetch("http://localhost:5211/api/game/highest/10")
        .then(response => {return response.json()})
        .then(data => setLeaderboardState(data))
        .catch(error => console.log(error));
    }

    return (
        // <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-sky-950 to-black font-serif'>

        <div className='flex flex-col items-center min-h-screen bg-gradient-to-b from-black via-sky-950 to-black font-serif'>
            <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">Leaderboard</h1>
            <img src={logo} alt="logo" className="w-40 h-40 rounded-full mb-12"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardState.map(game =>
                        {return <SingleGameTableRow key={game.gameId} data={game} place={leaderboardState.indexOf(game)+1}></SingleGameTableRow>}
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard