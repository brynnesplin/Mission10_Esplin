
import './App.css'
import BowlerList from './bowlerList'

function Heading(){
  return(
    <>

    <h1>Crazy Bowlers</h1>
    <p>These are all the bowlers on the Marlins and the Sharks</p>

    </>
  )

}

function App() {

  return (
    <>
      <Heading/>
      <BowlerList/>
    </>
  )
}

export default App
