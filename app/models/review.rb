class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :comment, presence: true
  validates :rating, presence: true, numericality: { only_integer: true }

  validates :rating, inclusion: { in: 1..5 }
  
end
