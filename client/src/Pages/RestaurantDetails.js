import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard"


function RestaurantDetails({ user }) {

    let { id } = useParams();

    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        fetch(`/restaurants/${id}`)
            .then(r => r.json())
            .then(data => setRestaurant(data))
    }, []);
    let reviews = restaurant.reviews;
    console.log(reviews);




    return (
        <>
            <h1>{restaurant.name}</h1>
            <img src={`${restaurant.image_url}`} width="500" height="500" />
            <p>{restaurant.description}</p>
            <h3>Reviews</h3>
            {reviews ? reviews.map((review) => <ReviewCard key={review.id} review={review} user={user} />) : ''}
            {user ? <button>Leave Review</button> : ''}
        </>
    )
}

export default RestaurantDetails;