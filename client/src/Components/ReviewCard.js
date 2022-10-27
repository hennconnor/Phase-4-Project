function ReviewCard({ review, user, handleDelete }) {

    if (user) {
        return (
            <div>
                <p>User: {review.user.name}</p>
                <p>Rating: {review.rating}/5</p>
                <p>Comment: {review.comment}</p>
                {(user.id) === (review.user.id) ? <button>Update Review</button> : ''}
                {(user.id) === (review.user.id) ? <button onClick={handleDelete}>Delete Review</button> : ''}
            </div>
        )
    }
    else {
        return (
            <div>
                <p>User: {review.user.name}</p>
                <p>Rating: {review.rating}/5</p>
                <p>Comment: {review.comment}</p>
            </div>
        )

    }
}

export default ReviewCard;