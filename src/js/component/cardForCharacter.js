import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from '../store/appContext';

export const CardCharacter = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="eachCard">
			<div className="card m-2">
				<img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/characters/" + props.character.uid + ".jpg"} />
				<div className="card-body">
					<h5 className="card-title">{props.character.name}</h5>
					<Link to={`/data/character/${props.character.uid}`}>
					<button type="button" className="btn btn-outline-info me-2">
						Learn more
					</button>
					</Link>
					<button type="button" className="btn btn-warning">
					★
					</button>
				</div>
				
				{/* <Link to={`/data/vehicles/${props.vehicle.uid}`}>
							<button type="button" className="btn btn-outline-info me-2">
								Learn more
							</button>
						</Link>
						
	*/}
			</div>
		</div>
	);
};