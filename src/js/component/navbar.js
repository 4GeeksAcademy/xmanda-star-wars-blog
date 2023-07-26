import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
