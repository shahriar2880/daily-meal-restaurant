import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.png'
import slide2 from '../../../assets/home/slide2.png'
import slide3 from '../../../assets/home/slide3.png'
import slide4 from '../../../assets/home/slide4.png'
import slide5 from '../../../assets/home/slide5.png'
import slide6 from '../../../assets/home/slide6.png'
import slide7 from '../../../assets/home/slide7.png'
import slide8 from '../../../assets/home/slide8.png'
import slide9 from '../../../assets/home/slide9.png'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
  return (
    
    <section>
      <SectionTitle
        subHeading = {"From 11.00am to 10.00pm"}
        heading = {"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>pooding</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>creame-bisket</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>chocolate-cake</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>fruit-icecream</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>pan-cake</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>creme-bisket</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>cup-icecream</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>penut-cake</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} />
          <h3 className='md:text-3xl uppercase text-white text-center -mt-20'>penut-bisket</h3>
          </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Category