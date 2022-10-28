puts "creating Users..."

user1 = User.create(username: "username1", password: "abc123", name: "Connor", image_url: 'https://clutchpoints.com/wp-content/uploads/2021/10/Seahawks-Russell-Wilson-Geno-Smith-Seahawks-Rams-1000x600.jpeg')
user2 = User.create(username: "username2", password: "abc123", name: "Teejay", image_url: 'https://pbs.twimg.com/media/E7hadohVEAY1mpJ.jpg')
user3 = User.create(username: "usernam3", password: "abc123", name: "Matt")

puts "creating Restaurants..."

rest1 = Restaurant.create(name: "Paseos", description: "Carribean Sandwiches", image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/02/db/f9/b9/paseo-caribbean.jpg')
rest2 = Restaurant.create(name: "Nate's Wings and Waffles", description: "chicken and waffles", image_url: 'https://nomtasticfoods.net/wp-content/uploads/2019/04/Nates-Wings-and-Waffles-24.jpg')
rest3 = Restaurant.create(name: "Mio Posto", description: "Pizza", image_url: 'https://images.squarespace-cdn.com/content/v1/5d487ebf2cc93d000172751a/6a1accca-cc8a-4afc-9a05-bdf08d2ec045/MIO_POSTO_FINALS024.jpg')

puts "creating Reviews..."

review1 =  Review.create(comment: "fire", rating: 5, user_id: 1, restaurant_id: 3)
review2 =  Review.create(comment: "trash", rating: 1, user_id: 2, restaurant_id: 2)
review3 =  Review.create(comment: "average", rating: 3, user_id: 3, restaurant_id: 1)
review4 = Review.create(comment: "nice ambience", rating: 4, user_id: 3, restaurant_id: 3)