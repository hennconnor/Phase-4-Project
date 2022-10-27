import RestaurantCard from "../Components/RestaurantCard"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function RestaurantDetails() {

    let { id } = useParams();

const [restaurantCard, setRestaurantCard] = useState([])

    useEffect(() => {
        fetch(`/restaurants/${id}`)
            .then(r => r.json())
            .then(data => setRestaurantCard(data))
    }, []);


    

    return (
        <>
            <h1>{restaurantCard.name}</h1>   
            <img src={`${restaurantCard.image_url}`} width="500" height="500" />
            <p>{id}</p>
        </>
    )
}

export default RestaurantDetails;