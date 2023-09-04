import { FaArchway, FaCloudflare, FaGuilded } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const OurServices = () => {
  return (
    <div className="mt-20 mb-32">
      <h2 className="text-4xl font-semibold font-serif mb-12">
        Our Best <span className="text-sky-500 animate-pulse">Services</span>
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="text-center space-y-5">
            <h1 className="flex justify-center text-7xl text-sky-600">
              <FaCloudflare />
            </h1>
            <h2 className="text-xl font-semibold font-serif">
              Calculate Weather
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
              temporibus adipisci minima <br /> natus incidunt minus consectetur
              quod corrupti sint?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center space-y-5">
            <h1 className="flex justify-center text-7xl text-yellow-700">
              <FaGuilded />
            </h1>
            <h2 className="text-xl font-semibold font-serif">
              Beat Tour Guide
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
              temporibus adipisci minima <br /> natus incidunt minus consectetur
              quod corrupti sint?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center space-y-5">
            <h1 className="flex justify-center text-7xl text-slate-700">
              <FaArchway />
            </h1>
            <h2 className="text-xl font-semibold font-serif">Customization</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
              temporibus adipisci minima <br /> natus incidunt minus consectetur
              quod corrupti sint?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurServices;
