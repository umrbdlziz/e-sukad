import { useState } from "react";
import StandingsTable from "../components/StandingsTable";
import GameSelector from "../components/GameSelector";
import {
  mlbbHeaders,
  mlbbTeams,
  pubgHeaders,
  pubgTeams,
  valorantHeaders,
  valorantTeams,
} from "../constants";

const StatisticsPage = () => {
  const [selectedGame, setSelectedGame] = useState("mlbb");

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  return (
    <section className="p-4">
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-center">STATISTICS</h1>
      <hr className="border-t border-gray-300 w-full my-4" />
      <GameSelector
        selectedGame={selectedGame}
        onGameChange={handleGameChange}
      />

      {selectedGame === "mlbb" && (
        <StandingsTable
          title="MLBB Standings"
          headers={mlbbHeaders}
          data={mlbbTeams}
        />
      )}
      {selectedGame === "valorant" && (
        <StandingsTable
          title="Valorant Standings"
          headers={valorantHeaders}
          data={valorantTeams}
        />
      )}
      {selectedGame === "pubg" && (
        <StandingsTable
          title="PUBG Mobile Standings"
          headers={pubgHeaders}
          data={pubgTeams}
        />
      )}
    </div>
    </section>
  );
};

export default StatisticsPage;
