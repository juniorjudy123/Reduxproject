import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ListIcon from "@mui/icons-material/List"
import HomeIcon from "@mui/icons-material/Home"
import LogoutIcon from "@mui/icons-material/Logout"
import SettingsIcon from "@mui/icons-material/Settings"
import React from "react"
import MenuLink from "../menuLink/MenuLink"
import "./leftbar.css"

export default function LeftBar() {
	return (
		<div className="leftbar">
			<div className="leftbarWrapper">
				<MenuLink icon={<HomeIcon />} text="Homepage" />
				<MenuLink icon={<ListIcon />} text="Lists" />
				<MenuLink icon={<ShoppingCartIcon />} text="Products" />
				<MenuLink icon={<SettingsIcon />} text="Settings" />
				<MenuLink icon={<LogoutIcon />} text="Logout" />
			</div>
		</div>
	)
}
