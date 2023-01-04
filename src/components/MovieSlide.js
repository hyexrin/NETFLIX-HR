import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import MovieCard from "./MovieCard";


// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 6
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 5
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

const MovieSlide = ({ movies }) => {
    return (
        <div style={{position: 'relative'}}>
            <Swiper
                slidesPerView={8}
                spaceBetween={10}
                slidesPerGroup={2}
                speed={800}
                loop={true}
                loopFillGroupWithBlank={false}
                navigation={true}
                modules={[Navigation, Lazy]}
                lazy={true}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                    },
                    450: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                    },
                    920: {
                        slidesPerView: 6,
                        slidesPerGroup: 3,
                    },
                }}
            >
                {movies.results.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieSlide