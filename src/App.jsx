import { useState } from 'react'

import './App.css'
//test array
const articlesTitles = [
  "Intelligenza Artificiale e Automazione: Come Cambieranno le Professioni nel 2030",
  "Smartphone Pieghevoli: Tra Innovazione e Realtà del Mercato",
  "La Sicurezza nel Mondo Digitale: Le Minacce Emergenti del 2024",
  "5G vs. Wi-Fi 6: Qual è la Tecnologia di Rete del Futuro?",
  "Blockchain Oltre le Criptovalute: Nuove Frontiere in Settori Inaspettati"
];


function App() {
  const [titles, setTitles] = useState(articlesTitles)
  const [newTitles, setNewTitles] = useState('')

  function addArticle(e) {
    e.preventDefault()
    console.log(articlesTitles);
    console.log(newTitles);

    //add new item to the UI
    setTitles([
      newTitles,
      ...titles
    ])

    setNewTitles('')

  }

  return (
    <>

      <div className="container">
        <h1>Form</h1>
        <form onSubmit={addArticle}>
          <div className="mb-3">


            <label htmlFor="task" className='form-label'>Article Title:</label>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter new article title"
                aria-label="Enter new article title"
                aria-describedby="button-addon2"
                value={newTitles}
                onChange={e => setNewTitles(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
            </div>
            <small id='titleHelperId' className='form-text text-muted'>Type your new article title</small>
          </div>
        </form>


        <ul className="list-group list-group-numbered">
          {titles.map((article, index) => <li key={index} className='list-group-item'>
            {article}
          </li>)}


        </ul>
      </div>
    </>
  )
}

export default App
