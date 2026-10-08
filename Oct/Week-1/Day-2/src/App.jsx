import About from './About'
import './App.css'
import Home from "./Home";

function App() {

  let a = 10;
  return (
    <div>hello

      <div>
        welcome!
        </div>

      <Home v={a} str={"Hello, world!"} arr={[1, 2, 3]} obj={{ name: "John", age: 30 }} />
      <About />
    </div>
    
  )
}

export default App
