import React, { useState, useEffect } from "react";
import RestaurantCard from '../Components/RestaurantCard';


function Restaurants() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch(`/restaurants`)
            .then(r => r.json())
            .then(data => setRestaurants(data))
    }, []);

    return (
        <div>
            {restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
        </div>
    )
}

export default Restaurants;