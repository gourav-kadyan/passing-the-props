import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        required
        placeholder="Enter Your Name"
        onChange={(e) => {
          setName(e.target.value)
          setShow(false)
        }}
      />
      <button onClick={() =>{
         setShow(true);
         setNewName(name)
      }}>Login</button>
      <Welcome name={newName} show={show} />
    </div>
  );
}

export default App;
