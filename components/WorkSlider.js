// data
// Update your workSlides data with actual GitHub links
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/project1.jpg',
          githubLink: 'https://github.com/Arnab-Ghosh7/SMS-Spam-Classifier' // Replace with actual link
        },
        {
          title: 'title',
          path: '/projects2.jpg',
          githubLink: 'https://github.com/Arnab-Ghosh7/Flight_SQL_App'
        },
        {
          title: 'title',
          path: '/project3.jpg',
          githubLink: 'https://github.com/Arnab-Ghosh7/Indian-Data'
        },
        {
          title: 'title',
          path: '/project4.jpg',
          githubLink: 'https://github.com/Arnab-Ghosh7/Startup-Dashboard'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          githubLink: '#' // Added default link
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          githubLink: '#' // Added default link
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          githubLink: '#' // Added default link
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          githubLink: '#' // Added default link
        },
      ],
    },
  ],
};

// Then modify the Swiper component to wrap each image with a Link component
import Link from 'next/link';



import {Swiper, SwiperSlide} from 'swiper/react';



import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';

import {Pagination } from 'swiper';

import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return ( <Swiper
  modules={[Pagination]}
  spaceBetween={10}

  pagination={{
    clickable: true,
  }}
  className="h-[280px] sm:h-[480px]"
>
    {
      workSlides.slides.map((slide, index) => { // Fixed variable name
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-5 cursor-pointer'>
              {slide.images.map((image, index) =>{
                return ( <div className='relative rounded-lg overflow-hidden flex items-center justify-center group h-32 sm:h-48' key={index}>
                  <div className='flex items-center rounded-lg justify-center relative overflow-hidden group w-full h-full'>
                    {/* image  */}
                    <Link href={image.githubLink} passHref legacyBehavior target="_blank" rel="noopener noreferrer">
                      <a className="w-full h-full block">
                        <Image src={image.path} width={500} height={300} alt='' className='object-cover w-full h-full' />
                      </a>
                    </Link>
                    {/* overlay gradient  */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 '>
                      {/* title  */}
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                        <Link href={image.githubLink} passHref legacyBehavior target="_blank" rel="noopener noreferrer">
                          <a className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] cursor-pointer'>
                            <div className='delay-100'>LIVE</div>
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>
  );
};

export default WorkSlider;
