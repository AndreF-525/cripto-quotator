import SearchForm from "./components/SearchForm"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="app-tittle">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <SearchForm />
        </div>
      </div>
    </>
  )
}

export default App
