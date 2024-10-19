import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-8 ">
          <div className="flex flex-wrap justify-center gap-3 bg-white shadow-xl px-5 py-2 rounded-3xl ">
            <button onClick={()=> setColor("red") } className="text-white	outline-none px-4 rounded-full" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> setColor("green") } className="text-white	outline-none px-4 rounded-full bg-green-700">Green</button>
            <button onClick={()=> setColor("blue") } className="text-white	outline-none px-4 rounded-full bg-blue-700">Blue</button>
            <button onClick={()=> setColor("orange") } className="text-white	outline-none px-4 rounded-full bg-orange-700">Orange</button>
            <button onClick={()=> setColor("pink") } className="text-white	outline-none px-4 rounded-full bg-pink-700">Pink</button>
            <button onClick={()=> setColor("purple") } className="text-white	outline-none px-4 rounded-full bg-purple-700">Purple</button>
            <button onClick={()=> setColor("black") } className="text-white	outline-none px-4 rounded-full bg-black">black</button>
            <button onClick={()=> setColor("silver") } className="text-white	outline-none px-4 rounded-full bg-slate-800">Slate</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
