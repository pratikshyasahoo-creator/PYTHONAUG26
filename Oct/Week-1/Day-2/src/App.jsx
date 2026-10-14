import About from './About'
import './App.css'
import Home from './Home'
import Product from './Product'

function App() {

  let a=10;

  return (
    <div>
      Hello

      <div>
        Welcome
      </div>

      <Home v={a}  str={"this is my string"} arr={[1,2,3]} obj={{name:'xyz',age:40}}/>
      <About/>
      <Product product_title={"Smart TV"} description={"Samsung Smart TV with 4K Ultra HD and 55-inch display"} price={45000}/>
    </div>
  )
}

export default App