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
    <section>
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
    </section>
  );
};

export default StatisticsPage;
