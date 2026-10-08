function Home(props) {
  return (
    <div>
      this is the home page
      <br />
      value: {props.v}
      <br />
      String: {props.str}   
      <br />
      Array values: {props.arr}
      <br />
      Object values: {JSON.stringify(props.obj)}
      <br />
      object name: {props.obj.name}
    
    </div>
  )
}

export default Home