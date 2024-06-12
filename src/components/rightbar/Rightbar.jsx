import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import React from "react"
import "./rightbar.css"

export default function Rightbar() {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{/* <Recommendation type="user" />
				<Recommendation type="popular" />
				<Recommendation type="editor" /> */}

				<button className="rightButton">
					See More
					<ArrowDropDownIcon />
				</button>
			</div>
		</div>
	)
}
