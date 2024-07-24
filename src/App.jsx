import { useState } from 'react'
import Navbar from "./component/navbar"
import Newsboard from "./component/newsboard"
function App() {
  const [cat,setCat]=useState("general")
  return (
    
  <div>
    <Navbar setCat={setCat}/>
    <Newsboard cat={cat}/>
  </div>
  );
}

export default App
