
const fetchYo = () => {
  fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(data => console.log(data))
}

function App() {
  return (
    <div>
      <button onClick={fetchYo}>Click Me</button>
      <h1>Edit this app to complete LINE MAN Wongnai Frontend Assignment!</h1>
    </div>


  )
}

export default App