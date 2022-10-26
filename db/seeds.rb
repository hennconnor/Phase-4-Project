puts "creating Users..."

user1 = User.create(username: "username1", password: "abc123", name: "Connor")
user2 = User.create(username: "username2", password: "abc123", name: "Teejay")
user3 = User.create(username: "usernam3", password: "abc123", name: "Matt")

puts "creating Restaurants..."

rest1 = Restaurant.create(name: "Paseos", description: "Carribean Sandwiches")
rest2 = Restaurant.create(name: "Nate's Wings and Waffles", description: "chicken and waffles")
rest3 = Restaurant.create(name: "Mio Posto", description: "Pizza")

puts "creating Reviews..."

review1 =  Review.create(comment: "fire", rating: 5, user_id: 1, restaurant_id: 3)
review2 =  Review.create(comment: "trash", rating: 1, user_id: 2, restaurant_id: 2)
review3 =  Review.create(comment: "average", rating: 3, user_id: 3, restaurant_id: 1)