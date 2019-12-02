import React from "react"
import DropDownMenu from "../../components/DropDownMenu.jsx"

import "./Pikachu.scss"

const Pikachu = props => {
	return (
		<div className="pikachu">
			<DropDownMenu color='rgb(0,0,0)' />
			<div className="eyes-container">
				<div className="eye">
					<div className="pupil"/>
				</div>
				<div className="eye">
					<div className="pupil"/>
				</div>
			</div>
			<div className="cheek-container">
				<div className="cheek"/>
				<div className="nose"/>
				<div className="cheek"/>
			</div>
			<div className="mouth-container">
				<div className="mouth left">
					<div className="mouth-remove" />
				</div>
				<div className="mouth right">
					<div className="mouth-remove" />
				</div>
			</div>
			<div className="mouth-open">
				<div className="throat">
					<div className="tongue" />
				</div>
			</div>
		</div>
	)
}

export default Pikachu