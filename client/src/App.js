import React from "react"
import { Router, Location } from "@reach/router"
import posed, { PoseGroup } from "react-pose"

import "./App.scss"

import Ewok from "./pages/ewok/Ewok"
import Home from "./pages/home/Home"
import NotFound from "./pages/not-found/NotFound"
import Pikachu from "./pages/Pikachu/Pikachu"
import Stargate from "./pages/stargate/Stargate"

const RouteContainer = posed.div({
	enter: {
		opacity: 1,
		delay: 300,
		transition: {
			opacity: {
				ease: "easeInOut",
				duration: 400
			},
			default: {
				ease: "easeOut",
				duration: 500
			}
		},
		beforeChildren: 300
	},
	exit: {
		opacity: 0
	}
})

const PosedRouter = ({ children }) => (
	<Location>
		{({ location }) => (
			<PoseGroup>
				<RouteContainer key={location.key}>
					<Router location={location}>{children}</Router>
				</RouteContainer>
			</PoseGroup>
		)}
	</Location>
)

const App = () => {
	return (
		<div clasName="app">
			<PosedRouter>
				<NotFound path="*" />
				<Home path="/" />
				<Ewok path="/ewok" />
				<Pikachu path="/pikachu" />
				<Stargate path="/stargate" />
			</PosedRouter>
		</div>
	)
}

export default App