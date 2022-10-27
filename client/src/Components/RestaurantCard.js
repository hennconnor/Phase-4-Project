import React, { useEffect, useState}  from 'react';
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant, handleClick }) {

    const [restaurantCard, setRestaurantCard] = useState([])

    useEffect(() => {
        fetch(`/restaurants`)
            .then(r => r.json())
            .then(data => setRestaurantCard(data))
    }, []);







    return (
    <div>
        <Link to={`/restaurants/${restaurant.id}`}>
            <h1 onClick={handleClick}>{restaurant.name}</h1>
            {restaurant.image_url ? <img src={`${restaurant.image_url}`} width="500" height="500" /> : <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" />}
         </Link>
    </div>
        
    )
}

export default RestaurantCard;