import React from 'react';

function equipe() {
  return (
    <section>
      <div className="bg-card-equipe bg-center bg-cover h-full bg-fixed" id="equipe">
        <div className="bg-hero-blur h-full">
          <div className="items-center py-6 w-full">
            <h1 className="text-green-light font-bold text-2xl md:text-3xl text-center">Equipe Elofit</h1>
          </div>
          <div className="flex inline-flex flex-col md:flex-row w-full items-center flex-grow justify-center mb-5 py-2">
            <div className="bg-card-prof w-56 h-64 p-4 rounded-md md:mx-2 my-2">
              <div className="w-full flex flex-col h-full items-center justify-center">
                <img className="rounded-full h-32 w-32 mb-2  bg-cover bg-contain border-2 border-green-dark border-opacity-75" src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <div className="text-white">
                  <h2 className="text-2xl text-center font-semibold">Fulano de tal</h2>
                  <span className="text-base font-regular">especialista em treino funcional</span>
                </div>
              </div>
            </div>
            <div className="bg-card-prof w-56 h-64 p-4 rounded-md md:mx-2 my-2">
              <div className="w-full flex flex-col h-full items-center justify-center">
                <img className="rounded-full h-32 w-32 mb-2  bg-cover bg-contain border-2 border-green-dark border-opacity-75" src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <div className="text-white">
                  <h2 className="text-2xl text-center font-semibold">Fulano de tal</h2>
                  <span className="text-base font-regular">especialista em treino funcional</span>
                </div>
              </div>
            </div>
            <div className="bg-card-prof w-56 h-64 p-4 rounded-md md:mx-2 my-2">
              <div className="w-full flex flex-col h-full items-center justify-center">
                <img className="rounded-full h-32 w-32 mb-2 border-2 border-green-dark border-opacity-75" src="https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <div className="text-white">
                  <h2 className="text-2xl text-center font-semibold">Fulano de tal</h2>
                  <span className="text-base font-regular">especialista em treino funcional</span>
                </div>
              </div>
            </div>
            <div className="bg-card-prof w-56 h-64 p-4 rounded-md md:mx-2 my-2">
              <div className="w-full flex flex-col h-full items-center justify-center">
                <img className="rounded-full h-32 w-32 mb-2  bg-cover bg-contain border-2 border-green-dark border-opacity-75" src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <div className="text-white">
                  <h2 className="text-2xl text-center font-semibold">Fulano de tal</h2>
                  <span className="text-base font-regular">especialista em treino funcional</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex inline-flex items-center justify-center mb-10">
            <a href="#" className="btn bg-green text-white h-10 px-6 py-2 md:ml-5 rounded-md text-center font-bold">Ver mais</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default equipe
