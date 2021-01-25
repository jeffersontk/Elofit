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
          <img className="lg:block h-10 w-auto" src="https://lh3.googleusercontent.com/IxZ9q0EpVwjBizT53_gRtKiLDsK94A1t8ECMm6smsaNQiv1YvW3n6U85YitZ6h1-FW3i-hGB-N-sw6TTLozGOGCbtqAWqNdTF9z1AAVx-MLMk5ElcAhtfoIP5tDNc9PJ-ic18RNEBRcszRGUWSQwbx9toj1SUv7SpV7I42yl4uFHX3qpu4iXuus_MCuc_cIEFlweOp99k25v-R7aJMEZq91t8ZPNtVYvKjdx_-yJJ1xFA2brtnfMOvUOhOt3Z9bHJwKhPGra-PnyFx4iiSlfW5HjUto7Y-VmTRHsuRVWI6QKK_HKsTgvNsRjotoAm4rRPya0UwaZ25uNcMPMxi0r8Wp7zqggwhRke2hlvglmEODxT2xxPfrqE0VmrdJwyqkA65v2D4oVPkWcbOz83G7rPReSHnKvZJTBP5Ll5Tgf2_f6PY4iDpH4JHsDNEAWS49c3w6s4PdmXKTYlj4Su3h2m4zOh4xJhlSTMbHcG3YzzIiDOVKj9F19yHcaOszoSftP6w7Oy7vXBUmqHLQlEd3IF5g9TNm5r5Yg1JgXR1QLZHNe_zIIyp4Q7pg5cdTyLLzPjxY3EKxGGxxeTyLFqfCDOCTZIKKSMFOxvd3oOt4u7_Pyb-2w9U5E5mNaWf5_9u_CvZwO9kbcJBVxLaBpv1Li9k9Zn56StLWeFT4Dd3QxFX_cmRJI416HkWFcHS8ixSM=w186-h162-no?authuser=0" alt="Logo-Elofit"/>
        </div>
      </a>
      <button
        onClick={menuShow}
        className="lg:hidden ml-auto mr-6" data-target="#menu">
        <img height="30" width="30" src="https://lh3.googleusercontent.com/fYy9qmkQYl9qaoIPzhlGGQGOsr0-bHpAwgp6JrPgXWkyUx5sTw6Xuzvha9DvA9ogXdNTLPcVuTDoUR9JUWvEqlfgOXeYFahcR6DuvPMg4khGmdVHmB1fz-dx66BpQXNgMdLa0ePZj6KS-t1x9AV6YqxC-sx58nKJp1yhLYIAPFZktaRH92wEx6Nns6tzCKph0lmf4pt6C0cR9qjnXfYu2DSfggVYdij8a-3QMaGYmlIAXqUJ_q1vZTr4D8shzZrMFRIxkYKlUAbvBSKfYnNr3EVBMxaHfqNsx8iMKl6j0zrkkL9rZzRH5wm1eIFgsHdvOEBnBDaLZwoWEhg-E51OMeflblksdZ057ob6nSdD0WxBAS0BRb4P86YZy3R4k9Uzc-EmuZeC8z1OZmugTpZ0S1N1xqJq8XH1kE8f6QrY45nmQ5VWbGrvMhU7wXLGBMMON0NK3USsd3GzWCRhUDY5-2TKwW_r1iLGo3IW3PZAdmVuFLcQmCCxgtryHk9sVop_DBlglOWy7Fq8YqnLgQ3-ED8eFZr08oTgMwalywTOVyiet2a3lHymbD2RGa3eNcu1IqEqx9CS33GdWk3ZqSTn_EpS2e70iGZPapkJ64I0VQ_sng-O8Lkvvw0KIlx5bz5lX394D-v1d5LSeAnhQ6XOIzcJtOQwhSsQGygj7LMqTrwuADqqHRtk9AUOpj87ziA=s151-no?authuser=0" alt="logo"/>
      </button>
      <div className="hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex items-center lg:flex-row lg:ml-auto lg:mr-12 flex flex-col">
          <a onClick={menuShow} href="#unidade" className="bg-gray-900 hover:bg-gray-dark text-green-light px-3 py-3 rounded-md text-sm font-semibold">Unidades</a>
          <a onClick={menuShow} href="#equipe" className="text-white hover:bg-gray-dark px-3 py-3 rounded-md text-sm font-semibold">Equipe</a>
          <a onClick={menuShow} href="#atividades" className="text-white hover:bg-gray-dark px-3 py-3 rounded-md text-sm font-semibold">Atividades</a>
          <a onClick={menuShow} href="#contato" className="text-white hover:bg-gray-dark px-3 py-3 rounded-md text-sm font-semibold">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default toolbar
