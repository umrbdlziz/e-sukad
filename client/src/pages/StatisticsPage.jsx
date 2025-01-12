import { useEffect, useState } from "react";
import StandingsTable from "../components/StandingsTable";
import GameSelector from "../components/GameSelector";
import { mlbbHeaders, pubgHeaders, valorantHeaders } from "../constants";
import supabase from "../utils/supabase";

const StatisticsPage = () => {
  const [selectedGame, setSelectedGame] = useState("mlbb");
  const [mlbb, setMlbb] = useState([]);
  const [valorant, setValorant] = useState([]);
  const [pubg, setPubg] = useState([]);

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  useEffect(() => {
    async function getData() {
      let { data: mlbb, error } = await supabase.from("mlbbteams").select();

      if (error) {
        console.log(error);
        return;
      }

      const { data: valorant, error: valorantError } = await supabase
        .from("valorantteams")
        .select();

      if (valorantError) {
        console.log(valorantError);
        return;
      }

      const { data: pubg, error: pubgError } = await supabase
        .from("pubgteams")
        .select();

      if (pubgError) {
        console.log(pubgError);
        return;
      }

      setPubg(pubg);
      setValorant(valorant);
      setMlbb(mlbb);
    }
    getData();
  }, []);

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
            data={mlbb}
          />
        )}
        {selectedGame === "valorant" && (
          <StandingsTable
            title="Valorant Standings"
            headers={valorantHeaders}
            data={valorant}
          />
        )}
        {selectedGame === "pubg" && (
          <StandingsTable
            title="PUBG Mobile Standings"
            headers={pubgHeaders}
            data={pubg}
          />
        )}
      </div>
    </section>
  );
};

export default StatisticsPage;
