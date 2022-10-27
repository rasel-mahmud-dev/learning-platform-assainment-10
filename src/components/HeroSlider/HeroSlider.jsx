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
                    <div className="banner-image">
                        <img className="w-full" src="/8801001_8572.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="banner-image">
                        <img src="/cartoon-web-design-background_52683-70879.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="banner-image">
                        <img src="/professional-programmer-working-late-dark-office.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
