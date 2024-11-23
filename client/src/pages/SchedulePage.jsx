import { useState } from "react";
import GameSelector from "../components/GameSelector";
import { matchSchedule, teamsData } from "../constants";

const SchedulePage = () => {
  const [selectedGame, setSelectedGame] = useState("mlbb");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  const handlePreviousDate = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const filteredMatches = matchSchedule.filter((match) => {
    const matchDate = new Date(match.datetime).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const selectedDateString = selectedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return matchDate === selectedDateString;
  });

  return (
    <section>
      <GameSelector
        selectedGame={selectedGame}
        onGameChange={handleGameChange}
      />
      <h1 className="text-2xl font-semibold text-center my-4">
        Match Schedule
      </h1>
      <div className="mx-10">
        <div className="mx-auto p-4 border rounded-xl border-gray-300">
          <div className="flex justify-start items-center gap-4 mb-4">
            <button
              className="text-orange-500 w-5"
              onClick={handlePreviousDate}
            >
              &lt;
            </button>
            <h2 className="text-lg">{formattedDate}</h2>
            <button className="text-orange-500 w-5" onClick={handleNextDate}>
              &gt;
            </button>
          </div>

          {filteredMatches.length === 0 ? (
            <div className="text-center text-gray-500">No matches</div>
          ) : (
            filteredMatches.map((match, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4"
              >
                <div className="flex items-center justify-start">
                  <span className="text-gray-500">
                    {new Date(match.datetime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <span className="text-gray-600">
                    {
                      teamsData.find((t) => t.id === match.teams[0].id)
                        .shortName
                    }
                  </span>
                  <img
                    src={teamsData.find((t) => t.id === match.teams[0].id).href}
                    alt="team logo"
                    className="w-8"
                  />
                  {match.teams[0].result !== null ? (
                    <div
                      className={`flex justify-center w-6 rounded text-gray-600 ${
                        match.teams[0].result > match.teams[1].result
                          ? "text-green-500 bg-green-300"
                          : "bg-gray-300"
                      }`}
                    >
                      <span>{match.teams[0].result}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                  <span className="text-gray-600">vs</span>
                  {match.teams[1].result !== null ? (
                    <div
                      className={`flex justify-center w-6 rounded text-gray-600 ${
                        match.teams[1].result > match.teams[0].result
                          ? "text-green-500 bg-green-300"
                          : "bg-gray-300"
                      }`}
                    >
                      <span>{match.teams[1].result}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                  <img
                    src={teamsData.find((t) => t.id === match.teams[1].id).href}
                    alt="team logo"
                    className="w-8"
                  />
                  <span className="text-gray-600">
                    {
                      teamsData.find((t) => t.id === match.teams[1].id)
                        .shortName
                    }
                  </span>
                </div>
                <hr className="border-t border-gray-300 w-full my-2" />
                <div className="text-sm text-gray-500 flex justify-between">
                  <span>{match.stage}</span>
                  <span>{match.location}</span>
                  <span>Bo{match.bo}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SchedulePage;
