class User < ApplicationRecord
    has_many :reviews
    has_many :restaurants, through: :reviews

    has_secure_password

  validates :username, 
        presence: true, 
        uniqueness: true,
        length: { maximum: 18 }
  validates :name, presence: true
  
  
end
