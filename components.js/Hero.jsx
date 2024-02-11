

import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';


export default function Hero() {


    return (
        <Wrapper className="section hero-section">
            <div className="container">

                <Swiper pagination={true} modules={[Pagination,Autoplay]} className="mySwiper"
                    autoplay={{
                        delay: 3000,
                        // disableOnInteraction: false,
                    }}>
                    <SwiperSlide>
                        <div className="banner">
                            <img src="/asset/image.png" alt="hero" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner">
                            <img src="/asset/image.png" alt="hero" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner">
                            <img src="/asset/image.png" alt="hero" />
                        </div>
                    </SwiperSlide>

                </Swiper>



            </div>

        </Wrapper>
    )
}


const Wrapper = styled.section`
    



    .banner{
        width: 100%;

        img{
            width: 100%;
            height: 100%;
        }
    }

`