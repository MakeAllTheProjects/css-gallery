import React from "react"
import "./Ewok.scss"
import DropDownMenu from "../../components/DropDownMenu"

export default function Ewok (props) {
	return (
		<main className="ewok">
			<DropDownMenu color="rgb(78, 46, 15)"/>
			<div className="ear-container">
				<div className="ear">
					<div className="ear-cutout left"/>
				</div>
				<div className="stitches">
					<div className="stitch-container">
						<div className="stitch left"/>
						<div className="stitch right"/>
					</div>
					<div className="stitch-container">
						<div className="stitch left" />
						<div className="stitch right" />
					</div>
					<div className="stitch-container">
						<div className="stitch left" />
						<div className="stitch right" />
					</div>
				</div>
				<div className="ear">
					<div className="ear-cutout right"/>
				</div>
			</div>
			<div className="face-container">
				<div className="eyes-container">
					<div className="eye">
						<div className="pupil" />
					</div>
					<div className="eye">
						<div className="pupil" />
					</div>
				</div>
				<div className="nose"/>
				<div className="muzzle">
					<div className="mouth">
						<div className="mouth-cutout"/>
					</div>
				</div>
			</div>
		</main>
	)
}