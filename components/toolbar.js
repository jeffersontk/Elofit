import React from 'react';

function menuShow() {
  let menu = document.querySelector('#navigation')
  menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')

}

function toolbar() {
  return (
    <nav className="flex items-center bg-hero-blur fixed w-full py-3 flex-wrap">
      <a href="#hero" className="p-2 ml-6 lg:ml-12">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-8 w-auto" src="../assets/logo-elofit.png" alt="Logo-Elofit"/>
          <img className="hidden lg:block h-8 w-auto" src="../assets/logo-elofit.png" alt="Logo-Elofit"/>
        </div>
      </a>
      <button
        onClick={menuShow}
        className="text-white outline-linha rounded inline-flex p-5 hover:bg-gray-500 lg:hidden ml-auto mr-6 nav-toggler" data-target="#menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex items-center lg:flex-row lg:ml-auto lg:mr-12 flex flex-col">
          <a href="#unidade" className="bg-gray-900 hover:bg-gray-dark text-green-light px-3 py-3 rounded-md text-sm font-semibold">Unidades</a>
          <a href="#atividades" className="text-white hover:bg-gray-dark px-3 py-3 rounded-md text-sm font-semibold">Atividades</a>
          <a href="#equipe" className="text-white hover:bg-gray-dark px-3 py-3 rounded-md text-sm font-semibold">Equipe</a>
          <a href="#contato" className="text-white hover:bg-gray-dark px-3 py-3 rounded-md text-sm font-semibold">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default toolbar
