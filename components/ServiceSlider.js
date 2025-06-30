import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { SiPandas, SiTensorflow, SiJupyter } from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';


// data
const serviceData = [
  {
    icon: <FaChartLine />, // Data Analysis
    title: 'Data Analysis',
    description: 'Extracting insights and patterns from complex datasets.',
  },
  {
    icon: <SiTensorflow />, // Machine Learning Solutions
    title: 'Machine Learning Solutions',
    description: 'Developing and implementing predictive models and AI solutions.',
  },
  {
    icon: <SiJupyter />, // Research-Based Data Projects
    title: 'Research-Based Data Projects',
    description: 'Conducting in-depth research and delivering data-driven projects.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

import { FreeMode, Pagination, Autoplay } from 'swiper';


const ServiceSlider = () => {
  return ( <Swiper
  loop={true}
  loopAdditionalSlides={serviceData.length}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false, // Changed from true
    stopOnLastSlide: false,
    waitForTransition: false,
    reverseDirection: false
  }}
  speed={5000} // Increased speed
  slidesPerGroup={1}
  modules={[FreeMode, Pagination, Autoplay]}
  
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  // modules={[FreeMode, Pagination, Autoplay]} // ✅ Add Autoplay
  className="h-[240px] sm:h-[340px]"
>

    {
      serviceData.map((item, index) =>{
        return ( 
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-[300px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon  */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title&Desc  */}
              <div className='mb-8'>
                <div className='mb-4 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrows  */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>

            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>
  );
};

export default ServiceSlider;
