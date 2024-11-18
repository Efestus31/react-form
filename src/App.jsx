import { useState } from 'react'

import './App.css'

const articlesTitle = [
  "Intelligenza Artificiale e Automazione: Come Cambieranno le Professioni nel 2030",
  "Smartphone Pieghevoli: Tra Innovazione e Realtà del Mercato",
  "La Sicurezza nel Mondo Digitale: Le Minacce Emergenti del 2024",
  "5G vs. Wi-Fi 6: Qual è la Tecnologia di Rete del Futuro?",
  "Blockchain Oltre le Criptovalute: Nuove Frontiere in Settori Inaspettati"
];


function App() {
  const [titles, setTitles] = useState(articlesTitle)


  return (
    <>

      <div className="container">
        <h1>Form</h1>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        </form>


        <ul class="list-group list-group-numbered">
          {articlesTitle.map((article, index) => <li key={index} className='list-group-item'>
            {article}
          </li>)}
          <li class="list-group-item ">Active item</li>

        </ul>

      </div>
    </>
  )
}

export default App
