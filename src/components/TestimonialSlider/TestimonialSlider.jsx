import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = () => {
    const data = [
        {
            studentName: "Mr. Karim Khan",
            quote: `“Ultimately, E-Coaching is what really became the driving force behind the career change.”`,
            studentImage:
                "https://s3.amazonaws.com/accredible-api-users/images/94847/original/1451672136986?1451671818",
        },
        {
            studentName: "Mr. Mike",
            quote: `
		“Before E-Coaching, I was working two minimum wage jobs. Now, I have a new job, a new mindset, and new life!”
		`,
            studentImage:
                "https://d20vrrgs8k4bvw.cloudfront.net/images/testimonials/thumbnails/e7256e217abc-Responsive_Portraits_254.jpg",
        },

        {
            studentName: "Mr. Javed Khan",
            quote: `“I was a commerce student and wanted to change my career to developing for Android. E-Coaching helped me learn the everything I needed to become an Android developer starting from basics to expert level.”`,
            studentImage:
                "https://d20vrrgs8k4bvw.cloudfront.net/images/testimonials/thumbnails/6aa7236e9dbe-received_10155286806645225.jpeg",
        },
        {
            studentName: "King Khan",
            quote: `
		“I got new job as a Data Science Engineer after graduating from my Nanodegree program .”
		`,
            studentImage:
                "https://d20vrrgs8k4bvw.cloudfront.net/images/testimonials/thumbnails/d94597f76b08-20819301_10210368554190461_5722929402122242950_o.jpg",
        },
    ];

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
	                  
                    },
                    1024: {
                        slidesPerView: 3,
	             
                    },
                    1324: {
                        slidesPerView: 3,
	         
                    },
                }}
                modules={[Autoplay, Pagination]}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center min-h-[300px] flex justify-between flex-col py-10">
                            <div>
                                <img className="w-20 h-20 rounded-full mx-auto" src={item.studentImage} alt="" />
                                <p className="mt-4 dark:text-base-300/80 text-neutral/60">{item.quote}</p>
                            </div>
                            <h4 className="text-medium  text-xl font-semibold py-4">{item.studentName}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;