import { useState } from "react";
import GameSelector from "../components/GameSelector";
import { teamsData, playersData } from "../constants";

const TeamsPage = () => {
  const [selectedGame, setSelectedGame] = useState("mlbb");

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  // Filter teams based on the selected game
  const filteredTeams = teamsData.filter((team) => team.game === selectedGame);

  return (
    <section className="p-4">
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-center">Teams and Players</h1>
        <hr className="border-t border-gray-300 w-full my-4" />
        <GameSelector selectedGame={selectedGame} onGameChange={handleGameChange} />
        <div className="mx-10">
          <div className="mx-auto p-4 border rounded-xl border-gray-300">
            {filteredTeams.length === 0 ? (
              <div className="text-center text-gray-500">No teams available for this game</div>
            ) : (
              filteredTeams.map((team) => (
                <div key={team.id} className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img src={team.href} alt="team logo" className="w-12 h-12" />
                      <span className="text-lg font-semibold text-gray-600">{team.shortName}</span>
                    </div>
                    <span className="text-gray-500">Game: {team.game}</span>
                  </div>
                  <hr className="border-t border-gray-300 w-full my-2" />
                  <div className="text-gray-700">
                    <h2 className="text-md font-semibold mb-2">Players</h2>
                    <ul className="list-disc pl-5 space-y-1">
                      {playersData
                        .filter((player) => player.teamId === team.id)
                        .map((player) => (
                          <li key={player.id} className="text-gray-600">
                            {player.name} - {player.role}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;