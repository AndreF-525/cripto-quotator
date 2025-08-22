import { useEffect } from "react"
import SearchForm from "./components/SearchForm"
import { useCryptoStore } from "./store"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

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
