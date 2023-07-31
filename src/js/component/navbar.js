import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDeleteFavorites = (e, name) => {
		e.stopPropagation();
		const myfavs = store.favorites.filter((item) => item.name !== name)
		actions.newFavorites(myfavs)
	};

	return  (
		<>
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"/>
			</Link>
			<div className="ml-auto">
			
			<div className="dropdown">
						<a className="btn btn-outline-warning dropdown-toggle mx-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites.map((value, index) => {
								return (
									<li key={index}>
										{
											store.favorites.length === 0 ? <a className="dropdown-item">Empty</a> : <a className="dropdown-item d-flex " href="#">
												{value}
										
												<i className=" btn fa-solid fa-xmark delete" 
												onClick={() => actions.deleteFavorite(index)}></i>
												
											</a>
										}
									</li>
								);
							})}
						</ul>
					</div>
				
			</div>
		</nav>
		</>
	);
};
