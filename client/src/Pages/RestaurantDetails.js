import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard"


function RestaurantDetails({ user }) {

    let { id } = useParams();

    const [restaurant, setRestaurant] = useState([])

    const [newReview, setNewReview] = useState({
        comment: '',
        rating: '',
    })
    //const [reviews, setReviews] = useState([])
    let reviews = restaurant.reviews

    useEffect(() => {
        fetch(`/restaurants/${id}`)
            .then(r => r.json())
            .then(data => setRestaurant(data)
            )
    }, []);

    function onDelete(deletedReview) {
        const currentRestaurant = { ...restaurant }
        const updatedReviews = currentRestaurant.reviews.filter((review) => review.id !== deletedReview.id);
        currentRestaurant.reviews = updatedReviews
        setRestaurant(currentRestaurant);
    }

    function addReview(addedReview) {
        const currentRestaurant = { ...restaurant }
        currentRestaurant.reviews.push(addedReview)
        setRestaurant(currentRestaurant)

    }

    function onUpdate(updatedReview) {
        const currentRestaurant = { ...restaurant }
        const updatedReviews = currentRestaurant.reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            }
            else {
                return review
            }
        });
        currentRestaurant.reviews = updatedReviews
        setRestaurant(currentRestaurant);

    }

    const handleNewChange = (e) => {
        const { name, value } = e.target
        setNewReview({ ...newReview, [name]: value })
    }

    function handleNewSubmit(e) {
        e.preventDefault()
        fetch('/reviews', {
            method: "POST",

            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...newReview,
                user_id: `${user.id}`,
                restaurant_id: `${restaurant.id}`

            })
        })
            .then(r => r.json())
            .then(newReview => addReview(newReview))
    }




    return (
        <div>
            <h1>{restaurant.name}</h1>
            {restaurant.image_url ? <img src={`${restaurant.image_url}`} width="400" height="400" /> : <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" width="400" height="400" />}
            <p>{restaurant.description}</p>
            <h3>Reviews</h3>

            <form onSubmit={handleNewSubmit}>
                <label>Comments:</label>
                <input type="text" name="comment" value={newReview.comment} placeholder="Leave Comments" onChange={handleNewChange} ></input>
                <label>Rating:</label>
                <select name='rating' value={newReview.rating} onChange={handleNewChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button>Create Review</button>
            </form>

            {reviews ? reviews.map((review) => <ReviewCard key={review.id} review={review} user={user} restaurant={restaurant} onDelete={onDelete} addReview={addReview} onUpdate={onUpdate} />) : ''}
        </div>
    )
}

export default RestaurantDetails;