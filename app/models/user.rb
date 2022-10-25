class User < ApplicationRecord
    has_many :reviews
    has_many :restaurants, through: :reviews

    has_secure_password

  validates :username, 
        presence: true, 
        uniqueness: true,
        length: { maximum: 18 }

  def password=(new_password)
    salt = BCrypt::Engine::generate_salt
    self.password_digest = Bcrypt::Engine::hash_secret(new_password, salt)
  end

  def authenticate(password)
    salt = password_digest[0..18]
    return nil unless Bcrypt::Engine::hash_secret(password, salt) == self.password_digest
    self
  end
  
  
end
