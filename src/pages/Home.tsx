import React from 'react';

import FotoLara from '../assets/lara-capila.jpg';
import Tooltip from '../components/Tooltip';

const Home = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <img
          alt='Foto de Lara Capila' 
          src={FotoLara} 
          className="rounded-full w-48 h-48 object-cover object-right-top mb-6"
        />

        <section>
          <h1
            className="
              font-bold
              text-5xl
              mb-2
            "
          >
            Olá, meu nome é Lara Capila
          </h1>
          <p className="text-xl font-light">Desenvolvedora Front End na
            <a
              href='https://www.way2.com.br/' 
              target="_blank" 
              rel="noreferrer" 
              className="
                underline
                underline-offset-8
                ml-1
                text-inherit
                hover:text-[#0e6dac]
              "
            >
              Way2 Technology
            </a>
          </p>
        </section>
      </div>
      <section className="text-base leading-8 mt-7">
        Desenvolvedora front end desde 2021, tenho 23 anos,
        moro em Belo Horizonte, Minas Gerais!
        Atualmente trabalho na Way2 Technology construindo soluções
        em medição e gestão de energia. Acredito que programação é algo maior,
        não é apenas sobre codificar, é sobre solucionar problemas,
        criar soluções inovadoras para tornar o mundo um lugar melhor.
        Você pode saber mais sobre mim 
        <p className="underline underline-offset-4">
          <Tooltip message="Em construção">
            clicando aqui.
          </Tooltip>
        </p>
      </section>

    </section>
  );
};

export default Home;
