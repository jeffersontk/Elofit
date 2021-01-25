import React from 'react';

function unidades() {
  return (
    <section className="bg-black flex inline-flex w-full items-center flex-col" id="unidade">
      <div className="items-center py-3 w-full">
        <h1 className="text-green font-bold text-2xl md:text-3xl text-center mt-3">Nossas Unidades</h1>
      </div>
      <div className="flex-wrap flex inline-flex items-center w-full flex-col md:flex-row flex-grow justify-center mb-5">
        <div className="bg-card-unidade-sc rounded-2xl m-5">
          <div className="bg-card-blur rounded-2xl p-3 px-5 flex inline-inline-flex flex-col text-white w-80 h-80 md:h-100 justify-end">
            <span className="text-2xl font-semibold">Elofit</span>
            <span className="text-3xl font-extrabold text-green-light mb-3">Senador Camará</span>
            <span className="font-semibold">Rua Maiorca, 101</span>
            <span className="font-semibold">Senador Camará</span>
            <span className="font-semibold">Rio de janeiro - RJ</span>
          </div>
        </div>
        <div className="bg-card-unidade-sc rounded-2xl m-5">
          <div className="bg-card-blur rounded-2xl p-3 px-5 flex inline-inline-flex flex-col text-white w-80 h-80 justify-end">
            <span className="text-2xl font-semibold">Elofit</span>
            <span className="text-3xl font-extrabold text-green-light mb-3">Senador Camará</span>
            <span className="font-semibold">Rua Maiorca, 101</span>
            <span className="font-semibold">Senador Camará</span>
            <span className="font-semibold">Rio de janeiro - RJ</span>
          </div>
        </div>
        <div className="bg-card-unidade-sc rounded-2xl m-5">
          <div className="bg-card-blur rounded-2xl p-3 px-5 flex inline-inline-flex flex-col text-white w-80 h-80 justify-end">
            <span className="text-2xl font-semibold">Elofit</span>
            <span className="text-3xl font-extrabold text-green-light mb-3">Senador Camará</span>
            <span className="font-semibold">Rua Maiorca, 101</span>
            <span className="font-semibold">Senador Camará</span>
            <span className="font-semibold">Rio de janeiro - RJ</span>
          </div>
        </div>
      </div>
      <div className="w-full flex inline-flex items-center justify-center mb-10">
        <a href="#" className="btn bg-green text-white h-10 px-6 py-2 md:ml-5 rounded-md text-center font-bold">Ver mais</a>
      </div>
    </section>
  )
}

export default unidades
