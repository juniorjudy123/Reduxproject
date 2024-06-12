import React from "react"
import "./warning.css"
import { useSelector } from "react-redux"

export default function Warning() {
	const name = useSelector((appstore) => appstore.user.name)
	return (
		<div className="warning">
			Deleting account cannot be undone <b className="bold">{name}</b>! You
			should confirm your password to delete your account.
		</div>
	)
}
