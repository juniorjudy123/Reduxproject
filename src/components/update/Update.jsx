import React, { useState } from "react"
import "./update.css"
import Warning from "../warning/Warning"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../../utils/userSlice"

export default function Update() {
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	console.log({ name, email })
	const dispatch = useDispatch()

	const handleUpdate = (e) => {
		e.preventDefault()
		dispatch(addUser({ name, email }))
	}

	const handleDelete = (e) => {
		e.preventDefault()
		dispatch(removeUser())
	}

	return (
		<div className="update">
			<div className="updateWrapper">
				<h3 className="updateTitle">Update Your Account</h3>
				<Warning />
				<button className="delete" onClick={handleDelete}>
					Delete Account
				</button>
				<div className="updateContainer">
					<form>
						<div className="formItem">
							<label>Profile Picture</label>
							<div className="profilePic">
								<img
									className="avatar"
									src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg"
									alt="profile-pic"
								/>
								<span className="change">Change</span>
							</div>
						</div>
						<div className="formItem">
							<label>Username</label>
							<input
								className="formInput"
								type="text"
								placeholder={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="formItem">
							<label>Email</label>
							<input
								className="formInput"
								type="text"
								placeholder={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						{/* <div className="formItem">
							<label>Password</label>
							<input className="formInput" type="password" />
						</div> */}
						<button className="updateButton" onClick={handleUpdate}>
							Update
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
