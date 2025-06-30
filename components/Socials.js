import Link from 'next/link';

import{RiYoutubeLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Socials = () => {
  return( 
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiYoutubeLine/>
    </Link>
     <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine/>
    </Link>
     <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiFacebookLine/>
    </Link>
     <Link href={'https://github.com/Arnab-Ghosh7'} className='hover:text-accent transition-all duration-300'>
    <FaGithub/>
    </Link>
     <Link href={'https://www.linkedin.com/in/arnab-ghosh-504964300/'} className='hover:text-accent transition-all duration-300'>
    <FaLinkedin/>
    </Link>
     {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiDribbbleLine/>
    </Link>
     <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiBehanceLine/>
    </Link>
     <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiPinterestLine/>
    </Link> */}
  </div>


  );
};

export default Socials;
