import { useState } from "react"
import "./DropDownMenu.scss"
import GithubIcon from "../assets/GitHubIcon"
import { Link } from "react-router-dom"

interface DropDownMenuProps {
  color: string
  onClick?: () => void
}

export default function DropDownMenu({
  color = "var(--color-primary)"
}: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const linkList = [
    {
      title: "Ewok",
      link: "/ewok"
    }, {
      title: "Pikachu",
      link: "/pikachu"
    }, {
      title: "Stargate",
      link: "/stargate"
    }
  ]

  const mapLinks = linkList.map(link => {
    return <Link
      to={link.link}
      style={{ color: `${color}` }}
    >
      {link.title}
    </Link>
  })

  return (
    <nav>
      <div
        className={isOpen ? "nav-button-container open" : "nav-button-container"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={isOpen ? "nav-bar one open" : "nav-bar one"}
          style={{ backgroundColor: `${color}` }}
        />
        <div
          className={isOpen ? "nav-bar two open" : "nav-bar two"}
          style={{ backgroundColor: `${color}` }}
        />
        <div
          className={isOpen ? "nav-bar three open" : "nav-bar three"}
          style={{ backgroundColor: `${color}` }}
        />
      </div>
      <div
        className={isOpen ? "menu-container open" : "menu-container"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link
          className="home-link"
          to="/"
          style={{
            color: `${color}`,
            borderBottom: `1px solid ${color}`
          }}
        >
          Home
        </Link>
        {mapLinks}
        <a
          className="home-link"
          href="https://github.com/MeghanBomberger/css-gallery"
          style={{
            borderTop: `1px solid ${color}`
          }}
          color={color}
          title="checkout the repo"
        >
          <GithubIcon color={color} />
        </a>
      </div>
    </nav>
  )
}
