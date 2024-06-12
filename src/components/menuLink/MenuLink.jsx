import React from "react"
import "./menuLink.css"
import { useSelector } from "react-redux"

export default function MenuLink({ icon, text }) {
	const name = useSelector((appstore) => appstore.user.name)
	return (
		<div className="menulink">
			{icon}
			<span className="menuLinkText">{text}</span>
			<span className="menuLinkTextName">
				{text === "Logout" && `(${name})`}
			</span>
		</div>
	)
}
