import PropTypes from "prop-types";
import { teamsData } from "../constants";
import Modal from "./Model";
import { useState } from "react";

const StandingsTable = ({ title, headers, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [modalAction, setModalAction] = useState("");
  const [teamLogo, setTeamLogo] = useState("");

  const handleOpenModal = (action, data = {}, href) => {
    setSelectedData(data);
    setModalAction(action);
    setTeamLogo(href);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 0);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="w-full overflow-auto">
        <table className="mx-auto overflow-auto border-collapse border-t border-b border-gray-300 bg-white font-semibold text-sm rounded-lg">
          <thead>
            <tr className="bg-purple-950 text-white">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`border-t border-b border-gray-300 px-4 py-2 ${
                    index === 0 ? "rounded-tl-lg" : ""
                  } ${index === headers.length - 1 ? "rounded-tr-lg" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                } hover:bg-gray-300`}
                onClick={() =>
                  handleOpenModal(
                    "Edit",
                    team,
                    teamsData.find((t) => t.id === team.team).href
                  )
                }
              >
                {headers.map((header, i) => (
                  <td
                    key={i}
                    className="border-t border-b border-gray-300 px-4 py-2 text-center"
                  >
                    {header === "Team" ? (
                      <div className="flex flex-row gap-3 justify-start items-center">
                        <img
                          src={teamsData.find((t) => t.id === team.team).href}
                          className="w-[25px]"
                          alt="team logo"
                        />
                        {teamsData.find((t) => t.id === team.team).name}
                      </div>
                    ) : (
                      team[header.toLowerCase().replace(/ /g, "_")]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
        initialData={selectedData}
        action={modalAction}
        image={teamLogo}
      />
    </div>
  );
};

StandingsTable.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingsTable;
