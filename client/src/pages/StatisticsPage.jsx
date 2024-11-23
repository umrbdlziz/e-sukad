import { useState } from "react";

import StandingsTable from "../components/StandingsTable";
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

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <section>
      <div className="mb-4 pr-5 flex flex-row items-center justify-end">
        <label
          htmlFor="game-select"
          className="block text-lg font-medium text-gray-700"
        >
          Game:
        </label>
        <select
          id="game-select"
          value={selectedGame}
          onChange={handleGameChange}
          className="mt-1 block cursor-pointer sm:w-60 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="mlbb">Mobile Legends: Bang Bang</option>
          <option value="valorant">Valorant</option>
          <option value="pubg">PUBG</option>
        </select>
      </div>

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
    </section>
  );
};

export default StatisticsPage;
