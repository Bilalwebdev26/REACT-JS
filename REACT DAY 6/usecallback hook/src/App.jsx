import { useCallback, useEffect, useState ,useRef} from "react";

function App() {
  const [lengthmax, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //usered hook
  const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}-_=+~`";
    }
    for (let i = 1; i <= lengthmax; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lengthmax, numAllowed, charAllowed, setPassword]);

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
  passGen()
  },[lengthmax,numAllowed,charAllowed,passGen])

  return (
    <>
      <div className="bg-black w-full h-screen ">
        <h1 className="font-black flex items-center justify-center pt-4 text-4xl text-white">
          Password Generator
        </h1>
        <div className="max-w-md w-full rounded-lg shadow-md px-4 py-8 mt-4 mx-auto bg-gray-700 ">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 "
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPassToClipboard} className="outline-none bg-slate-900 text-white px-3 py-0.5 shrink-0">
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center pag-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={lengthmax}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {lengthmax}</label>
            </div>
            <div className="flex items-center pag-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
            <div className="flex items-center pag-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
