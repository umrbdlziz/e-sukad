import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MLBB from '../../public/Home/MLBB.jpg';
import Valo from '../../public/Home/Valo.jpg';
import PUBG from '../../public/Home/PUBG.jpg';
import USM from '../../public/Home/USM.jpg';

const HomePage = () => {
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
        <div className="bg-white shadow-md rounded-lg overflow-hidden" style={{ height: '350px' }}>
            <div>
              <img src={USM} alt="News Banner 1" className="w-full h-full object-cover" />
            </div>

        </div>
      </div>
      <div className="event-details">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Event Details</h2>
          <Slider {...settings}>
            <div>
              <img src={MLBB} alt="Event Detail 1" className="w-full h-full object-cover mb-4" />
              <p className="mb-2">Date: 25th December 2023</p>
              <p className="mb-2">Location: USM Esports Arena</p>
              <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
            </div>
            <div>
              <img src={Valo} alt="Event Detail 2" className="w-full h-full object-cover mb-4" />
              <p className="mb-2">Date: 26th December 2023</p>
              <p className="mb-2">Location: USM Esports Arena</p>
              <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
            </div>
            <div>
              <img src={PUBG} alt="Event Detail 3" className="w-full h-full object-cover mb-4" />
              <p className="mb-2">Date: 27th December 2023</p>
              <p className="mb-2">Location: USM Esports Arena</p>
              <p className="mb-2">Description: Join us for an exciting event featuring top teams and players competing in various esports tournaments.</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;