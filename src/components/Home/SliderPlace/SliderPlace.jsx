import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SliderPlace = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold font-serif text-4xl mt-24 mb-12">
          Top 10{" "}
          <span className="text-sky-500 animate-pulse">Travel Place</span>
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://i.pinimg.com/564x/6b/5b/59/6b5b590e20bd400d9c266a59802e72f5.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Bandorban
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://a.cdn-hotels.com/gdcs/production105/d283/fe692f6d-a1b6-47c6-b2c0-39056ed2d7b7.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Seint-Martin
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Cox%27s_Bazar_beach_%283991311%29.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Cox's Bazar
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://www.travelmate.com.bd/wp-content/uploads/2019/06/Sajek-Valley.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Sajek Vally
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://images.hive.blog/p/8SzwQc8j2KJZWBXFXnbnQ1FtoZhRqrTWozhqoqWHpGmpmnho5pA2pmzuXSziCaP9dJWAExn3DttdrXqSj9iV3BRg74cTaacK9yK9fpnHhtn1vE683wU/?format=match&width=500&mode=fit"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Jaflong
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiRYtd_Gzy3fKJ6cTqDoa7VHTCZW6mCEewpgaK3px2oQ3nW52vTSJUfmMb9nr-WeapYk&usqp=CAU"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Rangamati
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://www.travelmate.com.bd/wp-content/uploads/2018/07/Main.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Kuakata
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://forsomethingmore.com/wp-content/uploads/2018/03/Sundarbans-National-Park-Tour-1-2.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Sundarban
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://live.staticflickr.com/4218/35683963501_c0701c6b84_b.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Sitakunda
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full h-72"
              src="https://www.travelmate.com.bd/wp-content/uploads/2022/02/Nikli-Haor-Road-1000x530.jpg"
              alt=""
            />
            <p className="mb-8 text-center font-serif font-semibold text-xl">
              Nikli haor
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderPlace;
