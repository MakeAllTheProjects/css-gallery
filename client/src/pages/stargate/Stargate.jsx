import React from "react"
import "./Stargate.scss"
import DropDownMenu from "../../components/DropDownMenu"

export default function Stargate () {
	return (
		<main className="stargate">
			<DropDownMenu color="rgb(19, 157, 248)"/>
			<div className="stargate-container">
				<div className="chevrons">
					<div className="chevron-container one">
						<div className="chevron"/>
					</div>
					<div className="groove one" />
					<div className="groove two" />
					<div className="chevron-container two">
						<div className="chevron" />
					</div>
					<div className="groove three" />
					<div className="groove four" />
					<div className="chevron-container three">
						<div className="chevron" />
					</div>
					<div className="groove five" />
					<div className="groove six" />
					<div className="chevron-container four">
						<div className="chevron" />
					</div>
					<div className="groove seven" />
					<div className="groove eight" />
					<div className="chevron-container five">
						<div className="chevron" />
					</div>
					<div className="groove nine" />
					<div className="groove ten" />
					<div className="chevron-container six">
						<div className="chevron" />
					</div>
					<div className="groove eleven" />
					<div className="groove twelve" />
					<div className="chevron-container seven">
						<div className="chevron" />
					</div>
					<div className="groove thirteen" />
					<div className="groove fourteen" />
					<div className="chevron-container eight">
						<div className="chevron" />
					</div>
					<div className="groove fifteen" />
					<div className="groove sixteen" />
				</div>
				<div className="ring-one">
					<div className="ring-two">
						<div className="event-horizon">
							<div className="ripple-one">
								<div className="ripple-two">
									<div className="ripple-three">
										<div className="ripple-four">
											<div className="ripple-five">
												<div className="ripple-six"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</main>
	)
}