import React from 'react';

function RestaurantCard({ restaurant }) {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            {restaurant.image_url ? <img /> : <img />}
            <p>{restaurant.description}</p>
        </div>
    )
}

export default RestaurantCard;