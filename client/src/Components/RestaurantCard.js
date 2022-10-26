import React from 'react';

function RestaurantCard({ restaurant, handleClick }) {
    return (
        <div>
            <h1 onClick={handleClick}>{restaurant.name}</h1>
            {restaurant.image_url ? <img src={`${restaurant.image_url}`} width="500" height="500" /> : <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" />}
            <p>{restaurant.description}</p>
        </div>
    )
}

export default RestaurantCard;