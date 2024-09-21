import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

  return (
    <div className="relative  overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3800, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-screen"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Welcome to Black Wood Hotel
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center">
          Experience luxury and comfort in the heart of Haputale.
        </p>
        <a
          href="#book"
          className="mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded hover:bg-green-600 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
