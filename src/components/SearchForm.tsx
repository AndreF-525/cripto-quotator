
export default function SearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option>-- Seleccione --</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Moneda:</label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  )
}
