import React from 'react';

function depoimentos() {
  return (
    <section className="bg-black w-full flex justify-center items-center flex-col p-4 md:px-56">
      <span className="text-green font-semibold text-2xl md:text-3xl py-5 mb-5">Depoimentos</span>
      <div className="border-green w-full border-2 rounded-xl px-2 md:px-4 md:py-4 text-center">
        <div className="flex flex-row items-center gap-2">
          <div className="h-44 flex items-start mt-8 md:mt-0">
            <span className="text-6xl text-green">"</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full h-24 w-24 mb-2 bg-cover bg-contain border-4 border-green border-opacity-75" src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <span className="text-white text-sm font-semibold md:text-xl md:px-4">Enfim consegui o tão sonhado resultado,graças a otima equipe da elo fit, super recomento.</span>
          </div>
          <div className="h-44 flex items-end">
            <span className="text-6xl text-green">"</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default depoimentos
