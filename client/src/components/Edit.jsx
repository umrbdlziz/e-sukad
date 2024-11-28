import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Edit = ({ isOpen, onClose, onSubmit, initialData, action, image }) => {
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg w-[600px]">
            <h2 className="text-xl mb-4">Add New Event</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input type="text" name="image" className="border rounded w-full py-2 px-3" value={formData.image || ""} onChange={handleChange}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input type="date" name="date" className="border rounded w-full py-2 px-3" value={formData.date || ""} onChange={handleChange}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input type="text" name="location" className="border rounded w-full py-2 px-3" value={formData.location || ""} onChange={handleChange}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea name="description" className="border rounded w-full py-2 px-3" value={formData.description || ""} onChange={handleChange}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Registration Link</label>
                <input type="text" name="registrationLink" className="border rounded w-full py-2 px-3" value={formData.registrationLink || ""} onChange={handleChange}/>
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
  );
};

Edit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  action: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Edit.defaultProps = {
  initialData: {},
};

export default Edit;
