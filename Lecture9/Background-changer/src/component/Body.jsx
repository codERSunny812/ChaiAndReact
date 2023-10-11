import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
          onClick={() => setColor("Tomato")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "Tomato"}}
          >Tomato</button>
          <button
          onClick={() => setColor("MediumSeaGreen")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "MediumSeaGreen"}}
          >Medium Sea Green</button>
          <button
          onClick={() => setColor("SlateBlue")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "SlateBlue"}}
          >Slate Blue</button>
          <button
          onClick={() => setColor("DodgerBlue")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "DodgerBlue"}}
          >Dodger Blue</button>
          <button
          onClick={() => setColor("Violet")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "Violet"}}
          >Voilet</button>
          <button
          onClick={() => setColor("LightGrey")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "LightGrey"}}
          >Light Grey</button>
          <button
          onClick={() => setColor("Gray")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "Gray"}}
          >gray</button>
          <button
          onClick={() => setColor("Orange")}
          className="outline-none px-4 py-1 rounded text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App