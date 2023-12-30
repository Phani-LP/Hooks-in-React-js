import { useState } from "react";
import { useRef } from "react";
import "./App.css";

const App=()=> {
  const inputRef = useRef(null);
  const [name, setName] = useState("Phani");
  
  const onClick = () => {
    inputRef.current.focus();
    
  };
  const save=(e)=>{
    setName(e.target.value);
  }
  
  return (
    <div>
      <center>
        <input name="name" type="text" onChange={save} placeholder="Click on button to foucs" ref={inputRef} />
        <button onClick={onClick}>Click Me</button>
        <hr />
        Hello {name}!
      </center>
    </div>
  );
}
export default App;
