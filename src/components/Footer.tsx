import React from 'react';
import SocialMedia from './SocialMedia';
import { HeartIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <section className='flex flex-col justify-center mt-14 text-lg'>
      <p className='tracking-wide mb-2'>Me siga nas redes sociais:</p>
      <SocialMedia />
      <p className='flex justify-center items-center mt-2'>
        Construido com
        <HeartIcon fill="red" width={20} className="ml-1 animate-pulse" />,
        React e TailwindCSS
      </p>
    </section>
  );
};

export default Footer;
