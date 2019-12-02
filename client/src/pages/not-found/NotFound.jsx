import React from "react"
import "./NotFound.scss"
import DropDownMenu from "../../components/DropDownMenu"

export default function NotFound (props) {
	return (
		<main className="not-found">
			<DropDownMenu color="rgb(23, 172, 199)"/>
			<h1>404</h1>
			<h2>Page Not Found</h2>
		</main>
	)
}