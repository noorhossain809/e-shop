// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from 'assets/images/banner1.jpg'
import banner2 from 'assets/images/banner2.png'
import banner3 from 'assets/images/banner3.png'
import banner4 from 'assets/images/banner4.jpg'
import banner5 from 'assets/images/banner5.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";


const Banner = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-6">
     <div className="">
  <ul className="bg-white rounded-b-lg border border-gray-200 w-96 text-gray-900">
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">An item</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">A second item</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">A third item</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">A fourth item</li>
    <li className="px-6 py-2 w-full rounded-b-lg hover:bg-gray-200">And a fifth one</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg hover:bg-gray-200">An item</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">A second item</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">A third item</li>
    <li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-200">A fourth item</li>
    <li className="px-6 py-2 w-full rounded-b-lg hover:bg-gray-200">And a fifth one</li>
  </ul>
</div>
<div className="col-end-7 col-span-4">
<Swiper
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       
       loop={true}
       slidesPerView={1}
       spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       coverflowEffect={{
         
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={{
        clickable: true,
      }}
      navigation={true}
       modules={[EffectCoverflow, Pagination, Autoplay]}
       className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" className="a" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" className="b" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" className="c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" className="c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="" className="c" />
        </SwiperSlide>
        
      </Swiper>
</div>

    </div>
    </div>
  );
};

export default Banner;