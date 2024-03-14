import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "adesh",
    age: 17
  }
  let myArr = [1,2,3]
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
     <Card userName={"chaiaurcode"} btnText="click me" />
     <Card userName={"hitesh"} btnText="Visit" />
    </>
  )
}

export default App
