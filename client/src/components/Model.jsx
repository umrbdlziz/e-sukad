import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { teamsData } from "../constants";

const InputField = ({ label, ...props }) => {
  switch (label) {
    case "duration":
    case "datetime":
      return <input type="text" {...props} />;
    case "location":
      return (
        <select {...props}>
          <option value="Training Room">Training Room</option>
          <option value="Main Auditorium">Main Auditorium</option>
          <option value="E-Sports Arena">E-Sports Arena</option>
          <option value="Grand Stadium">Grand Stadium</option>
        </select>
      );
    case "stage":
      return (
        <select {...props}>
          <option value="Group Stage">Group Stage</option>
          <option value="Knockout Stage">Knockout Stage</option>
          <option value="Quarter Finals">Quarter Finals</option>
          <option value="Semi Finals">Semi Finals</option>
          <option value="Finals">Finals</option>
        </select>
      );
    case "game":
      return (
        <select {...props}>
          <option value="mlbb">MLBB</option>
          <option value="valorant">Valorant</option>
          <option value="pubg">PUBG</option>
        </select>
      );
    default:
      return <input type="number" {...props} />;
  }
};

const Modal = ({ isOpen, onClose, onSubmit, initialData, action, image }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{action} Data</h2>
        {image && (
          <div className="mb-4">
            <img src={image} alt="team logo" className="w-24 mx-auto" />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {Object.keys(initialData).map((key) =>
              key === "teams" ? (
                <div className="col-span-2" key={key}>
                  <label className="block text-gray-700 capitalize">
                    team A name
                  </label>
                  <input
                    type="text"
                    name={key}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <label className="block text-gray-700 capitalize">
                    team B name
                  </label>
                  <input
                    type="text"
                    name={key}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {formData[key][0].result === null && (
                    <>
                      <label className="block text-gray-700 capitalize">
                        {
                          teamsData.find((t) => t.id === formData[key][0].id)
                            .name
                        }{" "}
                        result
                      </label>
                      <input
                        type="text"
                        name={key}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <label className="block text-gray-700 capitalize">
                        {
                          teamsData.find((t) => t.id === formData[key][1].id)
                            .name
                        }{" "}
                        result
                      </label>
                      <input
                        type="text"
                        name={key}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </>
                  )}
                </div>
              ) : (
                key !== "id" && (
                  <div key={key}>
                    <label className="block text-gray-700 capitalize">
                      {key}
                    </label>
                    <InputField
                      label={key}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                )
              )
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg"
            >
              {action}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  action: PropTypes.string.isRequired,
  image: PropTypes.string,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object,
  value: PropTypes.any,
};

export default Modal;
