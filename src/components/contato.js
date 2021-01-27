import React from 'react';

function contato() {
  return (
    <section className="bg-contato-xs md:bg-contato-xl bg-center bg-cover bg-contain h-full w-full" id="contato">
      <div className="bg-card-blur h-full flex items-center justify-center p-3">
        <div className="flex justify-center items-center">
          <div className="bg-gray-light md:p-5 rounded-xl flex inline-flex items-center justify-center flex-col opacity-95">
            <form className="flex flex-col w-full md:py-2 px-5 md:px-1 justify-center items-center">
              <span className="text-green text-xl font-semibold text-center py-2 px-4">Fique por dentro das novidades e das promoções da Elo fit</span>
                <input className="w-full text-green m-1 p-2 rounded-md border border-black border-opacity-50 " placeholder="Nome" type="text" />
                <input className="w-full text-green m-1 p-2 rounded-md border border-black border-opacity-50 " placeholder="E-mail" type="email" />
                <input className="w-full text-green m-1 p-2 rounded-md border border-black border-opacity-50 " placeholder="Whatsapp" type="tel" />
              <div className="py-2 flex inline-flex justify-center w-full">
                <button className="btn bg-green text-white h-12 px-8 py-3 m-1 md:ml-2 rounded-md text-center font-bold">Enviar</button>
                <a href="#" className="btn bg-green text-white h-12 px-8 py-3 m-1 md:ml-2 rounded-md text-center font-bold">Matricular-se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contato
