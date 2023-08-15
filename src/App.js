import logo from './logo.svg'
import './App.css'

function App() {
  const name = 'Rlyeh!'
  const handleNameChange = () => {
    const names = ['Rlyeh', 'Veroz', 'Daniel', 'Pollito']
    const int = Math.floor(Math.random() * names.length)
    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name} is the name</p>
      </header>
    </div>
  )
}

export default App
