import { useState } from "react"
import "./Home.scss"
import DropDownMenu from "../components/DropDownMenu"

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <main className="home">
      <DropDownMenu
        color="var(--color-primary)"
        onClick={() => setIsOpen(!isOpen)}
      />
      <h1>Welcome</h1>
    </main>
  )
}