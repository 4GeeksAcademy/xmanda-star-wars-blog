import React from 'react'
import { Link } from "react-router-dom";

const Card = ({ character }) => {
    const { id, name, image } =
        character;

    return (
        <div className="eachCard">
            <div className="card m-2">
                <img src={image} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <Link to={`/info/${id}`}>
                        <button type="button" className="btn btn-outline-info me-2">
                            Learn more!
                        </button>
                    </Link>
                    <button type="button" className="btn btn-warning">
                        Favorite
                    </button>
                </div>

            </div>
        </div>
    )
};

export default Card