import React from 'react';

function footer() {
  return (
    <footer className="bg-black text-white w-screen flex inline-flex flex-col p-5 md:px-28 md:py-10">
      <div className="flex inline-flex flex-row mb-10">
        <div className="w-full flex flex-col justify-center md:justify-start items-center md:items-start">
          <img className="lg:block h-28 w-36 mb-2" src="https://lh3.googleusercontent.com/IxZ9q0EpVwjBizT53_gRtKiLDsK94A1t8ECMm6smsaNQiv1YvW3n6U85YitZ6h1-FW3i-hGB-N-sw6TTLozGOGCbtqAWqNdTF9z1AAVx-MLMk5ElcAhtfoIP5tDNc9PJ-ic18RNEBRcszRGUWSQwbx9toj1SUv7SpV7I42yl4uFHX3qpu4iXuus_MCuc_cIEFlweOp99k25v-R7aJMEZq91t8ZPNtVYvKjdx_-yJJ1xFA2brtnfMOvUOhOt3Z9bHJwKhPGra-PnyFx4iiSlfW5HjUto7Y-VmTRHsuRVWI6QKK_HKsTgvNsRjotoAm4rRPya0UwaZ25uNcMPMxi0r8Wp7zqggwhRke2hlvglmEODxT2xxPfrqE0VmrdJwyqkA65v2D4oVPkWcbOz83G7rPReSHnKvZJTBP5Ll5Tgf2_f6PY4iDpH4JHsDNEAWS49c3w6s4PdmXKTYlj4Su3h2m4zOh4xJhlSTMbHcG3YzzIiDOVKj9F19yHcaOszoSftP6w7Oy7vXBUmqHLQlEd3IF5g9TNm5r5Yg1JgXR1QLZHNe_zIIyp4Q7pg5cdTyLLzPjxY3EKxGGxxeTyLFqfCDOCTZIKKSMFOxvd3oOt4u7_Pyb-2w9U5E5mNaWf5_9u_CvZwO9kbcJBVxLaBpv1Li9k9Zn56StLWeFT4Dd3QxFX_cmRJI416HkWFcHS8ixSM=w186-h162-no?authuser=0" alt="Logo-Elofit"/>
          <span className="text-sm font-medium my-2">Siga nossas redes sociais</span>
          <div className="flex inline-flex flex-row py-2 justify-center items-center gap-2">
            <img src="@/assets/icons/facebook.svg" alt="facebook icone" />
            <img src="@/assets/icons/instagram.svg" alt="instagram icone" />
            <img src="@/assets/icons/spotify.svg" alt="spotify icone" />
          </div>
        </div>
        <div className="hidden md:block w-full">
          <div className="flex inline-flex flex-row gap-24 justify-center items-start">
            <div className="flex flex-col gap-4">
              <span className="text-md font-medium uppercase">Saiba mais</span>
              <span className="text-sm font-light">ATENDIMENTO</span>
              <span className="text-sm font-light">QUEM SOMOS</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-md font-medium uppercase">Instituição</span>
              <span className="text-sm font-light">MODALIDADE</span>
              <span className="text-sm font-light">UNIDADE</span>
              <span className="text-sm font-light">EQUIPE</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-md font-medium uppercase">CORPORATIVO</span>
              <span className="text-sm font-light">TRABALHE CONOSCO</span>
              <span className="text-sm font-light">FRANQUIA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex inline-flex justify-center flex-col">
        <span className="border border-green-dark border-opacity-70 mb-3"></span>
        <span className="text-xs md:text-sm text-center">Termo de uso | DevFit design e Desenvolvimento</span>
      </div>
    </footer>
  )
}

export default footer
