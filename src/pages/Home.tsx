import { useState } from "react"
import "./Home.scss"
import DropDownMenu from "../components/DropDownMenu"

export default function Home() {
  const [hint, setHint] = useState<boolean>(true)

  return (
    <main className="home">
      <DropDownMenu
        color="var(--color-primary)"
        onClick={() => setHint(!hint)}
      />
      {hint === true && (
        <div className="hint-container">
          <span className="arrow">&#x2193;</span>
          <p>Click Here</p>
        </div>
      )}
      <h1>Welcome</h1>
    </main>
  )
}