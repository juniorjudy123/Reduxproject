import React from "react"
import "./update.css"
import Warning from "../warning/Warning"

export default function Update() {
	return (
		<div className="update">
			<div className="updateWrapper">
				<h3 className="updateTitle">Update Your Account</h3>
				<Warning />
				<button className="delete">Delete Account</button>
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
							<input className="formInput" type="text" placeholder="john" />
						</div>
						<div className="formItem">
							<label>Email</label>
							<input
								className="formInput"
								type="text"
								placeholder="john@gmail.com"
							/>
						</div>
						<div className="formItem">
							<label>Password</label>
							<input className="formInput" type="password" />
						</div>
						<button className="updateButton">Update</button>
					</form>
				</div>
			</div>
		</div>
	)
}
