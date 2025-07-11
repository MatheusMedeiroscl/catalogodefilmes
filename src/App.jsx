
import GetCatalog from './components/MoviesCatalog/GetCatalog'
import './App.css'

function App() {

  return (
    <>
      <div >
        <input type="text" className='sarchBar' placeholder='Pesquise por um filme'/>
      </div>

      <section>
          <GetCatalog/>
      </section>
    </>
  )
}

export default App
