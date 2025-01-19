import { useEffect, useState } from "react";
import { matchScheduleForm } from "../constants";
import Modal from "../components/Model";
import supabase from "../utils/supabase";

const SchedulePage = ({ isAdmin }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [teamsData, setTeamsData] = useState([]);
  const [matchSchedule, setMatchSchedule] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase.from("teams").select();
      if (error) {
        console.log("error", error);
      } else {
        setTeamsData(data);
      }
    };

    fetchTeams();
  }, []);

  const fetchMatchschedule = async () => {
    const { data, error } = await supabase.from("matchschedule").select();
    if (error) {
      console.log("error", error);
    } else {
      setMatchSchedule(data);
    }
  };

  useEffect(() => {
    fetchMatchschedule();
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
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

  const handleOpenModal = (action, data = {}) => {
    setSelectedData(data);
    setModalAction(action);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 0);
  };

  const handleSubmit = async (data) => {
    if (modalAction === "Add") {
      const { error } = await supabase.from("matchschedule").insert([data]);
      if (error) {
        console.log("error", error);
        return;
      }
      fetchMatchschedule();
      setIsModalOpen(false);
    } else {
      const { error } = await supabase
        .from("matchschedule")
        .update(data)
        .eq("id", data.id);

      if (error) {
        console.log("error", error);
        return;
      }
      fetchMatchschedule();
      setIsModalOpen(false);
    }
  };

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const filteredMatches = matchSchedule.filter((match) => {
    return formatDate(new Date(match.datetime)) === formatDate(selectedDate);
  });

  return (
    <section>
      <h1 className="text-3xl font-bold text-center my-4">Match Schedule</h1>
      <div className="flex justify-end mb-4">
        {isAdmin && (
          <button
            onClick={() => handleOpenModal("Add", matchScheduleForm)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          >
            Add Match
          </button>
        )}
      </div>

      <div className="mx-10">
        <div className="mx-auto p-4 mb-5 border rounded-xl border-gray-300">
          <div className="flex justify-start items-center gap-4 mb-4">
            <button
              className="text-orange-500 w-5 text-3xl"
              onClick={handlePreviousDate}
            >
              &lt;
            </button>
            <h2 className="text-xl">{formattedDate}</h2>
            <button
              className="text-orange-500 w-5 text-3xl"
              onClick={handleNextDate}
            >
              &gt;
            </button>
          </div>

          {filteredMatches.length === 0 || teamsData.length === 0 ? (
            <div className="text-center text-gray-500">No matches</div>
          ) : (
            filteredMatches.map((match, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-lg">
                    {new Date(match.datetime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  {isAdmin && (
                    <img
                      src="edit.png"
                      alt="edit"
                      className="w-[20px] h-[20px] cursor-pointer"
                      onClick={() => handleOpenModal("Edit", match)}
                    />
                  )}
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-600">
                  {teamsData.find((t) => t.id === match.team1_id)?.shortname || 'Team 1 Not Found'}
                  </span>
                  <img
                    src={teamsData.find((t) => t.id === match.team1_id)?.logo || 'default-logo.png'}
                    alt="team logo"
                    className="w-8"
                  />
                  {match.team1_result !== null ? (
                    <div
                      className={`flex justify-center w-6 rounded text-gray-600 ${
                        match.team1_result > match.team2_result
                          ? "text-green-500 bg-green-300"
                          : "bg-gray-300"
                      }`}
                    >
                      <span>{match.team1_result}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                  <span className="text-gray-600">vs</span>
                  {match.team2_result !== null ? (
                    <div
                      className={`flex justify-center w-6 rounded text-gray-600 ${
                        match.team2_result > match.team1_result
                          ? "text-green-500 bg-green-300"
                          : "bg-gray-300"
                      }`}
                    >
                      <span>{match.team2_result}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                  <img
                    src={teamsData.find((t) => t.id === match.team2_id)?.logo || 'default-logo.png'}
                    alt="team logo"
                    className="w-8"
                  />
                  <span className="text-gray-600">
                  {teamsData.find((t) => t.id === match.team1_id)?.shortname || 'Team 2 Not Found'}
                  </span>
                </div>
                <hr className="border-t border-gray-300 w-full my-2" />
                <div className="text-sm text-gray-500 flex justify-between gap-6 items-center">
                  <div className="flex flex-row gap-4 items-center">
                    <span>
                      {match.game === "mlbb" ? (
                        <img src="games/mlbb.png" alt="logo" className="w-6" />
                      ) : match.game === "valorant" ? (
                        <img
                          src="games/valorant.png"
                          alt="logo"
                          className="w-6"
                        />
                      ) : (
                        <img src="games/pubg.png" alt="logo" className="w-8" />
                      )}
                    </span>
                    <span>{match.stage}</span>
                  </div>
                  <span>{match.location}</span>
                  <div className="w-28 flex justify-end">
                    <span>Bo{match.bo}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={selectedData}
        action={modalAction}
      />
    </section>
  );
};

export default SchedulePage;