import React from 'react';

import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';

const SocialMedia = () => {
  return (
    <section className='w-full flex justify-center gap-3'>
        <a
          className='
            hover:scale-75
            hover:ease-in-out
            hover:duration-300
          '
          href='https://github.com/Lara-Capila' 
          target="_blank" 
          rel="noreferrer"
        >
          <img alt='github' src={Github} />
        </a>
        <a
          className='
          hover:scale-75
          hover:ease-in-out
          hover:duration-300
        '
          href='https://www.linkedin.com/in/lara-capila/'
          target="_blank" 
          rel="noreferrer"
        >
          <img alt='linkedIn' src={LinkedIn} />
        </a>
        <div></div>
    </section>
  );
};

export default SocialMedia;
