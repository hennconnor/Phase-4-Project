import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard"


function RestaurantDetails({ user }) {

    let { id } = useParams();

    const [restaurant, setRestaurant] = useState([])
    //const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`/restaurants/${id}`)
            .then(r => r.json())
            .then(data => setRestaurant(data)
            )
    }, []);

    let reviews = restaurant.reviews



    return (
        <div>
            <h1>{restaurant.name}</h1>
            {restaurant.image_url ? <img src={`${restaurant.image_url}`} width="400" height="400" /> : <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" width="400" height="400" />}
            <p>{restaurant.description}</p>
            <h3>Reviews</h3>
            {reviews ? reviews.map((review) => <ReviewCard key={review.id} review={review} user={user} />) : ''}
        </div>
    )
}

export default RestaurantDetails;