import React from "react"
import "./Home.scss"
import DropDownMenu from "../../components/DropDownMenu"
import arrow from "./downward.svg"

export default function Home(props) {
	const [hint, setHint] = React.useState(true)

	return (
		<main className="home">
			<DropDownMenu
				color="rgb(23, 172, 199)"
				onClick={() => setHint(!hint)}
			/>
			{hint === true && (
				<div className="hint-container">
					<img alt="arrow" className="arrow" src={arrow}/>
					<p>Click Here</p>
				</div>
			)}
			<h1>Welcome</h1>
		</main>
	)
}