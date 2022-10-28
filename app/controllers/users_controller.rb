class UsersController < ApplicationController

  skip_before_action :authorize, only: :create

def show
  user = User.find_by(id: session[:user_id])
  render json: user
end

def create 
  user = User.create!(user_params)
    render json: user, status: :created
end

def update
  user = User.update!(user_params)
  render json: user
end





private

def user_params
  params.permit(:username, :password, :name, :image_url)
end

end
