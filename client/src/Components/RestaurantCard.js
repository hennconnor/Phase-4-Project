import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {



    return (
        <div>
            <Link to={`/restaurants/${restaurant.id}`}>
                <h1>{restaurant.name}</h1>
                {restaurant.image_url ? <img src={`${restaurant.image_url}`} width="400" height="400" /> : <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" width="400" height="400" />}
            </Link>
        </div>

    )
}

export default RestaurantCard;