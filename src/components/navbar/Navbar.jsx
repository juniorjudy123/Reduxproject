import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import React from "react"
import "./navbar.css"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbarWrapper">
				<div className="navbarLeft">
					<span className="logo">Shop@Ease</span>
					<span className="navbarLink">Home</span>
					<span className="navbarLink">About</span>
					<span className="navbarLink">Contact</span>
				</div>

				<div className="navbarCenter">
					<div className="search">
						<input
							type="text"
							placeholder="search for something..."
							className="searchInput"
						/>
					</div>
				</div>
				<div className="navbarRight">
					<img
						className="avatar"
						src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
					<span className="navbarName">Benoy</span>
					<ArrowDropDownIcon />
				</div>
			</div>
		</div>
	)
}

export default Navbar
