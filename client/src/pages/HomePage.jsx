// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import MLBB from '../../public/Home/MLBB.jpg';
// import Valo from '../../public/Home/Valo.jpg';
// import PUBG from '../../public/Home/PUBG.jpg';
// import USM from '../../public/Home/USM.jpg';

// const HomePage = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleButtonClick = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="p-4">
//       <div className="banner mb-8">
//         <div className="bg-white shadow-md rounded-lg overflow-hidden" style={{ height: '350px' }}>
//           <div>
//             <img src={USM} alt="News Banner 1" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>
//       <div className="event-details">
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-2xl font-bold mb-4 text-center">EVENT DETAILS</h2>
//           <Slider {...settings}>
//             <div>
//               <img src={MLBB} alt="Event Detail 1" className="w-full h-[450px] object-cover mb-4" />
//               <p className="mb-2">Date: 25th December 2023</p>
//               <p className="mb-2">Location: USM Esports Arena</p>
//               <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
//             </div>
//             <div>
//               <img src={Valo} alt="Event Detail 2" className="w-full h-[450px] object-cover mb-4" />
//               <p className="mb-2">Date: 26th December 2023</p>
//               <p className="mb-2">Location: USM Esports Arena</p>
//               <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
//             </div>
//             <div>
//               <img src={PUBG} alt="Event Detail 3" className="w-full h-[450px] object-cover mb-4" />
//               <p className="mb-2">Date: 27th December 2023</p>
//               <p className="mb-2">Location: USM Esports Arena</p>
//               <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
//             </div>
//           </Slider>
//           <div className="flex justify-center mt-7">
//             <button 
//               className="bg-orange-500 text-white shadow-lg px-5 py-2 rounded w-[100px]"
//               onClick={handleButtonClick}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>

//       {showPopup && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-5 rounded shadow-lg w-[600px]">
//             <h2 className="text-xl mb-4">Add New Event</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Image URL</label>
//                 <input type="text" className="border rounded w-full py-2 px-3" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Date</label>
//                 <input type="date" className="border rounded w-full py-2 px-3" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Location</label>
//                 <input type="text" className="border rounded w-full py-2 px-3" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Description</label>
//                 <textarea className="border rounded w-full py-2 px-3"></textarea>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Contact</label>
//                 <input type="text" className="border rounded w-full py-2 px-3" />
//               </div>
//               <div className="flex justify-end">
//                 <button 
//                   type="button" 
//                   className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//                   onClick={handleClosePopup}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MLBB from '../../public/Home/MLBB.jpg';
import Valo from '../../public/Home/Valo.jpg';
import PUBG from '../../public/Home/PUBG.jpg';
import USM from '../../public/Home/USM.jpg';
import Edit from '../components/Edit';

const HomePage = ({ isAdmin }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-4">
      <div className="banner mb-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center" style={{ height: '270px' }}>
          <img src={USM} alt="News Banner 1" style={{ transform: 'scale(1)', width: 'auto', height: 'auto' }} />
        </div>
      </div>
      <div className="event-details">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">EVENT DETAILS</h2>
          <Slider {...settings}>
            <div>
              <img src={MLBB} alt="Event Detail 1" className="w-full h-[450px] object-cover mb-4" />
              <p className="mb-2">Date: 25th December 2023</p>
              <p className="mb-2">Location: USM Esports Arena</p>
              <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
              <p className="mb-4 mt-8 text-center">
                <a href="https://www.google.com/forms/about/" className="text-blue-500 hover:underline">CLICK HERE TO REGISTER</a>
              </p>
              {isAdmin && (
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                    onClick={() => {
                      setEditPopup(true);
                      setCurrentEvent({
                        image: "https://example.com/MLBB.jpg",
                        date: "2023-12-25",
                        location: "USM Esports Arena",
                        description: "Join us for an exciting event featuring top teams and players competing in various esports tournaments.",
                        registrationLink: "https://www.google.com/forms/about/"
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => console.log("Delete Event Triggered")}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div>
              <img src={Valo} alt="Event Detail 2" className="w-full h-[450px] object-cover mb-4" />
              <p className="mb-2">Date: 26th December 2023</p>
              <p className="mb-2">Location: Dewan Utama Pelajar A</p>
              <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
              <p className="mb-4 mt-8 text-center">
                <a href="https://www.google.com/forms/about/" className="text-blue-500 hover:underline">CLICK HERE TO REGISTER</a>
              </p>
              {isAdmin && (
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                    onClick={() => {
                      setEditPopup(true);
                      setCurrentEvent({
                        image: "https://example.com/Valorant.jpg",
                        date: "2023-12-26",
                        location: "Dewan Utama Pelajar A",
                        description: "Join us for an exciting event featuring top teams and players competing in various esports tournaments.",
                        registrationLink: "https://www.google.com/forms/about/"
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => console.log("Delete Event Triggered")}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div>
              <img src={PUBG} alt="Event Detail 3" className="w-full h-[450px] object-cover mb-4" />
              <p className="mb-2">Date: 27th November 2024</p>
              <p className="mb-2">Location: Online</p>
              <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
              <p className="mb-4 mt-8 text-center">
                <a href="https://www.google.com/forms/about/" className="text-blue-500 hover:underline">CLICK HERE TO REGISTER</a>
              </p>
              {isAdmin && (
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                    onClick={() => {
                      setEditPopup(true);
                      setCurrentEvent({
                        image: "https://example.com/image.jpg",
                        date: "2024-11-27",
                        location: "Online",
                        description: "Join us for an exciting event featuring top teams and players competing in various esports tournaments.",
                        registrationLink: "https://www.google.com/forms/about/"
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => console.log("Delete Event Triggered")}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </Slider>
          {isAdmin && ( // Only render the button if isAdmin is true
            <div className="flex justify-center mt-7">
              <button 
                className="bg-orange-500 text-white shadow-lg px-5 py-2 rounded w-[100px]"
                onClick={handleButtonClick}
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg w-[600px]">
            <h2 className="text-xl mb-4">Add New Event</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input type="text" className="border rounded w-full py-2 px-3" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input type="date" className="border rounded w-full py-2 px-3" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input type="text" className="border rounded w-full py-2 px-3" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea className="border rounded w-full py-2 px-3"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Registration Link</label>
                <input type="text" className="border rounded w-full py-2 px-3" />
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Edit
        isOpen={editPopup}
        onClose={() => setEditPopup(false)}
        onSubmit={(updatedEvent) => {
          console.log("Updated Event:", updatedEvent);
          setEditPopup(false);
        }}
        initialData={currentEvent || {}}
        action="edit"
      />
    </div>
  );
};

export default HomePage;