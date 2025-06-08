
import './App.css'

function App() {
  const items = ["Manzana", "Banana", "Pera", "Uva"];
  
  return (
    <section>
      <h1>HOla!</h1>
      <ul>
        {
          items.map((iten, index) => (
            <li key={index}>{iten}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default App
