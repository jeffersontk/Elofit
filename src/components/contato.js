import React from 'react';

function contato() {
  return (
    <section className="bg-contato bg-center bg-cover h-96 w-full" id="contato">
      <div className="bg-card-blur flex inline-flex h-full w-full items-center justify-center md:px-80 px-4">
        <div className="bg-gray-light md:h-56 h-80 w-full md:p-5 rounded-xl flex inline-flex items-center justify-center flex-col opacity-95">
          <span className="text-green text-xl font-semibold text-center py-2 px-4">Fique por dentro das novidades e das promoções da Elo fit</span>
          <form className="flex flex-col sm:flex-row w-full md:py-2 px-5 md:px-1">
            <input className="text-green m-1 p-2 rounded-md border border-black border-opacity-50 " placeholder="Nome" type="text" />
            <input className="text-green m-1 p-2 rounded-md border border-black border-opacity-50 " placeholder="E-mail" type="email" />
            <input className="text-green m-1 p-2 rounded-md border border-black border-opacity-50 " placeholder="Whatsapp" type="tel" />
          </form>
          <div className="py-2 flex inline-flex justify-center md:justify-end w-full">
            <button className="btn bg-green text-white h-12 px-8 py-3 m-1 md:ml-2 rounded-md text-center font-bold">Enviar</button>
            <a href="#" className="btn bg-green text-white h-12 px-8 py-3 m-1 md:ml-2 rounded-md text-center font-bold">Matricular-se</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contato
