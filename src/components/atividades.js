import React from 'react';

function atividades() {
  return (
 <section className="bg-black flex inline-flex w-full items-center flex-col" id="unidade">
      <div className="items-center py-3 w-full">
        <h1 className="text-green font-bold text-2xl md:text-3xl text-center mt-3">Principais Atividades</h1>
      </div>
      <div className="flex-wrap flex inline-flex items-center w-full flex-col md:flex-row flex-grow justify-center mb-5">
        <div className="bg-card-fitdance rounded-xl m-5">
          <div className="bg-card-blur bg-no-repeat rounded-xl p-3 px-5 flex inline-inline-flex flex-col text-white w-60 h-40 md:h-100 justify-end items-center">
            <span className="text-xl font-bold">Fit Dance</span>
          </div>
        </div>
        <div className="bg-card-luta rounded-xl m-5">
          <div className="bg-card-blur bg-no-repeat rounded-xl p-3 px-5 flex inline-inline-flex flex-col text-white w-60 h-40 md:h-100 justify-end items-center">
            <span className="text-xl font-bold">Lutas</span>
          </div>
        </div>
        <div className="bg-card-musculacao rounded-xl m-5">
          <div className="bg-card-blur bg-no-repeat rounded-xl p-3 px-5 flex inline-inline-flex flex-col text-white w-60 h-40 md:h-100 justify-end items-center">
            <span className="text-xl font-bold">Musculação</span>
          </div>
        </div>
        <div className="bg-card-funcional rounded-xl m-5">
          <div className="bg-card-blur bg-no-repeat rounded-xl p-3 px-5 flex inline-inline-flex flex-col text-white w-60 h-40 md:h-100 justify-end items-center">
            <span className="text-xl font-bold"> Treinos funcionais</span>
          </div>
        </div>
      </div>
      <div className="w-full flex inline-flex items-center justify-center mb-10">
        <a href="#" className="btn bg-green text-white h-10 px-6 py-2 md:ml-5 rounded-md text-center font-bold">Ver mais</a>
      </div>
    </section>
  )
}

export default atividades
