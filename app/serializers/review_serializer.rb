class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user
  has_one :user
  has_one :restaurant
end
