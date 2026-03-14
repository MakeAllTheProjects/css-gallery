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
      <h2>to Meghan's CSS Gallery</h2>
      <h3>Click the menu icon to view the gallery</h3>
      <p>A collection of pure CSS illustrations. All designs are made using only HTML and CSS.</p>
    </main>
  )
}