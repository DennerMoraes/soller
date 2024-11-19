import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import './Carousel.scss';

function Carousel({ carouselData }) {
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4.8,
          },
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="Swiper"
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item">
              <img src={item.icon} alt="icon" />
              <p>{item.description}</p>
              <div className="carousel-content">
                <img src={item.image} alt={`Foto de ${item.name}`} />
                <div className='carousel-profile'>
                  <h3>{item.name}</h3>
                  <h4>{item.position}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
