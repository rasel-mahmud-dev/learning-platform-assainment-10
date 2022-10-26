import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSlider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
            >
                <SwiperSlide>
                    <div>
                        <img className="w-full" src="/8801001_8572.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div>
                        <img src="/8801001_8572.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div>
                        <img src="/8801001_8572.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
