import { useRef, useEffect, useLayoutEffect } from "react";
function App() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Phani";
  }, []);

  return (
    <div><center>
      <input ref={inputRef} value="Hulk" />
      <p>The useLayoutEffect renders before the useEffect method.<br/>
        Use the useLayoutEffect when you wanna render something before anything else.
      </p>
      </center>
      </div>
  );
}
export default App;
