import React, {useState} from 'react';
//  data
// Add these imports at the top with other icon imports
// Remove the duplicate import at line 30 and keep only one import statement:
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaRProject,
} from "react-icons/fa";

import {
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPowerbi,
  SiMicrosoftexcel,
  SiPlotly,
  SiTensorflow,
} from "react-icons/si";

// Remove this duplicate import line completely:
// import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

// Update your aboutData array
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />
        ]
      },
      {
        title: 'Languages',
        icons: [
          <FaPython />,
          <FaDatabase />, // SQL
          // <FaRProject />, // R
        ],
      },
      {
        title: 'Tools',
        icons: [
          <SiJupyter />,
          <SiPandas />,
          <SiNumpy />,
          <SiScikitlearn />,
          <SiPlotly />, // For Matplotlib equivalent
          <SiPowerbi />,
        ],
      },
      {
        title: 'Concepts',
        icons: [
          // <FaChartBar />, // Data Visualization
          // <SiTensorflow />, // Machine Learning
          <SiMicrosoftexcel />, // Statistical Analysis
        ],
      },
    ],
  },
  // {
  //   title: 'Web Development',
  //   info: [
  //     <FaHtml5 />,
  //     <FaCss3 />,
  //     <FaJs />,
  //     <FaReact />,
  //     // <SiNextdotjs />,
  //     // <SiFramer />,
  //     // <FaWordpress />,
  //   ],
  // },
  // {
  //   title: 'UI/UX Design',
  //   info: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
  // },

  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  // {
  //   title: 'experience',
  //   info: [
  //     {
  //       title: 'UX/UI Designer - XYZ Company',
  //       stage: '2012 - 2023',
  //     },
  //     {
  //       title: 'Web Developer - ABC Agency',
  //       stage: '2010 - 2012',
  //     },
  //     {
  //       title: 'Intern - DEF Corporation',
  //       stage: '2008 - 2010',
  //     },
  //   ],
  // },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return ( <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles/>
    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial='hidden' 
    animate='show' 
    exit='hidden' 
    className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar/>
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
        variants={fadeIn('right', 0.2)} 
    initial='hidden' 
    animate='show' 
    exit='hidden'  
        className="h2">
          Blending<span className='text-accent'> Scientific</span> Rigor with Data-Driven Vision
        </motion.h2>
        <motion.p 
        variants={fadeIn('right', 0.4)} 
    initial='hidden' 
    animate='show' 
    exit='hidden' 
        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          With a strong foundation in mathematics, programming, and statistical modeling, I’ve developed a keen interest in applying data science to real-world challenges.</motion.p>
        {/* counters*/}
        <motion.div 
        variants={fadeIn('right', 0.6)} 
    initial='hidden' 
    animate='show' 
    exit='hidden' 
        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 gap-x-6'>
            {/* experience  */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={2} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of Academic experience</div>
            </div>
            {/* Clients  */}
            {/* <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={250} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Staisfied Clients</div>
            </div> */}
            {/* Projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={10} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects</div>
            </div>
            {/* Awards  */}
            {/* <div className='relative flex-1 '>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={8} duration={5} /> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning Awards</div>
            </div> */}
          </div>
        </motion.div>
      </div>
      {/* info  */}
      <motion.div
      variants={fadeIn('left', 0.4)} 
    initial='hidden' 
    animate='show' 
    exit='hidden' 
      className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex)=>{
            return(
              <div key={itemIndex} 
              className={`${ index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
          {aboutData[index].info.map((item, itemIndex)=>{
            return(
              <div key={itemIndex}
              className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/* title  */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                {/* icons  */}
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className='text-2xl text-white'>{icon}</div>
                  })}
                </div>


              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;

