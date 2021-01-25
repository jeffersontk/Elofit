import React from 'react';

function menuShow() {
  let menu = document.querySelector('#navigation')
  menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')

}

function toolbar() {
  return (
    <nav className="flex items-center bg-hero-blur fixed py-3 flex-wrap w-screen">
      <a href="#hero" className="p-2 ml-6 lg:ml-12">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-10 w-auto" src="https://previews.dropbox.com/p/thumb/ABDNgn5Xz6tcO2TIRJ5R-clCu4aiPlAvPEShwk1saeN3ycFhJhyDK-VIfcH4H2cfbGqYYaJdZbNETsOvGtVWHyvzTb13kKAzWGnzppRg9ykuR16kKm75f1asRhsevGbOZX_kHrCrQMtTcspLbdMQ_M-IwE0OgZ1EsdTI0ppq20aJl-EcksN1cIKX1HBRaVdj2pDJr5Cq3_A9DaJG2k0etgRkplq3PnQaVO6C6qTan5SGBW_GRUUVkrgEjxf7pRZev4ppTjJ7bxsZCS4JHBvbfnRVXi1yMG2wtMwqrBrJC2jUKKLlMkQcJBQEP-ZGuhMsupj1qR-azQGw3WJDoQnxENTBDu7pYMVqNPoBpZJpAOVAJQ/p.png?fv_content=true&size_mode=5" alt="Logo-Elofit"/>
          <img className="hidden lg:block h-10 w-auto" src="https://previews.dropbox.com/p/thumb/ABDNgn5Xz6tcO2TIRJ5R-clCu4aiPlAvPEShwk1saeN3ycFhJhyDK-VIfcH4H2cfbGqYYaJdZbNETsOvGtVWHyvzTb13kKAzWGnzppRg9ykuR16kKm75f1asRhsevGbOZX_kHrCrQMtTcspLbdMQ_M-IwE0OgZ1EsdTI0ppq20aJl-EcksN1cIKX1HBRaVdj2pDJr5Cq3_A9DaJG2k0etgRkplq3PnQaVO6C6qTan5SGBW_GRUUVkrgEjxf7pRZev4ppTjJ7bxsZCS4JHBvbfnRVXi1yMG2wtMwqrBrJC2jUKKLlMkQcJBQEP-ZGuhMsupj1qR-azQGw3WJDoQnxENTBDu7pYMVqNPoBpZJpAOVAJQ/p.png?fv_content=true&size_mode=5" alt="Logo-Elofit"/>
        </div>
      </a>
      <button
        onClick={menuShow}
        className="lg:hidden ml-auto mr-6" data-target="#menu">
        <img height="30" width="30" src="https://previews.dropbox.com/p/orig/ABC_4S6CrMLGSdfhH75fsl8yUFN9G0ZKz4gff6deSkBFnu2Yps_ovPdQRe1qIlt3xWJoZrMvdyGtDnFkLHyYV4oZRBRShEaOx6UhpHk571OypTrRazBVyBkbpyIuXcz4Xsi5LroH-QEVg-BV4dMoQJ4BBHAhSJcArq9_oxR9V7p3SBedlq9i3WpFhyEuHmBvAcwawK5kBv0QcZFktP50NvA3IKNindm5lV4dxtn_HEnKCw7gFWjNiajVGz9NuEmv4ICNCx465v9N1soIjKQavDPiR2mljBYVkiYYexUlldO73FpdZuh7HCvE90UYThompydF4GmS5PMdVqyvml91fQq6/p.svg?fv_content=true&size_mode=5" alt="logo"/>
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
