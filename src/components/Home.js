import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">Bem-vindo!</span> No MyMinions você consegue reservar seu minion favorito com a melhor segurança e comodidade.
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
