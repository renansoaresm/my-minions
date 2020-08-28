import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                        <img src="Kevin.png" /> 
                            <h4>Minion Kevin</h4>
                            <p>Kevin é um minion alto de dois olhos com cabelo cortado em forma de broto e geralmente é visto usando seu uniforme de golfe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-image has-text-centered">
                        <i className="fa fa-empire"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                        <img src="Stuart.png" /> 
                            <h4>Minion Stuart</h4>
                            <p>Stuart é um Minion baixo com um olho só e cabelo penteado. No meu malvado favorito 2, ele é visto vestido de menina depois que Gru é recrutado pela Liga Anti-Vilões e enviado para o Bake My Day para investigar.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-apple"></i>
                    </div>
                     <div className="card-content">
                        <div className="content">
                        <img src="Bob.jpg" /> 
                            <h4>Minion Bob</h4>
                            <p>Bob (temporariamente conhecido como King Bob) é um dos Minions e um dos três protagonistas principais (ao lado de Kevin e Stuart), bem como o tritagonista do filme Minions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
