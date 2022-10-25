class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :image_url
end
