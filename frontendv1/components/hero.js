import React from 'react';

function hero() {
  return (
    <heade className="Container-hero">
      <div className="hero-fundo container-fluid">
        <div className="content-hero">
          <div>
            <h1 className="title">Elofit uma academia para todos, venha começar hoje seu treino.</h1>
          </div>
          <div className="content-plan">
            <div>
              <span>Planos</span> <br/>
              <span>a partir de</span>
            </div>
            <span className="plan-price">R$79<small>,90</small></span>
          </div>
          <a href="#">Matricule-se já</a>
        </div>
      </div>
    </heade>
  )
}

export default hero
