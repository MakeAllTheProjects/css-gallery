import React from "react"
import { Link } from "@reach/router"
import "./DropDownMenu.scss"
import GithubIcon from "../images/github-icon"

export default function DropDownMenu (props) {
	const [isOpen, setIsOpen] = React.useState()

	const linkList = [
		{
			title: "Ewok",
			link: "/ewok"
		},{
			title: "Pikachu",
			link: "/pikachu"
		},{
			title: "Stargate",
			link: "/stargate"
		}
	]

	const mapLinks = linkList.map(link => {
		return 	<Link
							to={link.link}
							style={{color: `${props.color}`}}
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
					style={{backgroundColor: `${props.color}`}}
				/>
				<div
					className={isOpen ? "nav-bar two open" : "nav-bar two"}
					style={{backgroundColor: `${props.color}`}}
				/>
				<div
					className={isOpen ? "nav-bar three open" : "nav-bar three"}
					style={{backgroundColor: `${props.color}`}}
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
						color: `${props.color}`,
						borderBottom: `1px solid ${props.color}`
					}}
				>
					Home
				</Link>
				{mapLinks}
				<a
					className="home-link"
					href="https://github.com/MeghanBomberger/css-gallery"
					style={{
						borderTop: `1px solid ${props.color}`
					}}
					fill={props.color}
					title="checkout the repo"
				>
					<GithubIcon fill={props.color}/>
				</a>
			</div>
		</nav>
	)
}