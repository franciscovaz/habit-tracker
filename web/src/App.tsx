import { Habit } from "./components/Habit"
import './styles/global.css'

function App() {

  return (
    <>
   <Habit completed={3}/>
   <Habit/>
   <Habit/>
   <Habit/>
   <Habit/>
   </>
  )
}

export default App
