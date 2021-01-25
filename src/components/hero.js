import React from 'react';

function hero() {
  return (
    <>
      <header className="md:bg-hero-pattern-lg bg-hero-pattern-xs bg-auto bg-no-repeat bg-center bg-cover bg-fixed w-screen" id="hero">
        <div className="bg-hero-blur flex flex-col items-center md:items-start px-4 justify-center h-screen w-screen">
          <div className="md:max-w-xl ml-10 mt-40 md:mt-0">
            <h1 className="text-white md:text-4sm text-3xl font-regular"> <strong className="text-green-light text-4xl ">Elofit academia para todos <br/> </strong> Venha começar hoje mesmo seu treino.</h1>
          </div>
          <div className="text-center md:ml-5">
            <div className="flex my-2 p-4 ">
              <div className="text-green-light font-bold text=3xl mx-2">
                <span>Planos a</span> <br/>
                <span>partir de</span>
              </div>
              <span className="text-white text-5xl font-bold">R$79<small>,90</small></span>
            </div>
            <a href="#" className="btn bg-green text-white h-12 px-8 py-3 md:ml-5 rounded-md text-center font-bold">Matricule-se já</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default hero
