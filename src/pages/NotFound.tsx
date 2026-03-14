import DropDownMenu from "../components/DropDownMenu"
import "./NotFound.scss"

export default function NotFound() {
  return (
    <main className="not-found">
      <DropDownMenu color="var(--color-primary)" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </main>
  )
}
