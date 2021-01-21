import React from 'react';

function hero() {
  return (
    <>
      <header className="bg-hero-pattern-lg bg-auto bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="bg-hero-blur h-screen flex flex-col items-center px-4 justify-center">
          <h1 className="text-white text-3xl font-bold text-center">Elofit uma academia para todos, venha começar hoje mesmo seu treino.</h1>
          <div className="flex my-6">
            <div className="text-green-light font-bold text=3xl mx-2">
              <span>Planos a</span> <br/>
              <span>partir de</span>
            </div>
            <span className="text-white text-5xl font-bold">R$79<small>,90</small></span>
          </div>
          <a href="#" className="btn bg-green text-white h-12 p-3 rounded-md text-center">Matricule-se já</a>
        </div>
      </header>
    </>
  )
}

export default hero
