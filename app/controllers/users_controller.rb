class UsersController < ApplicationController

def show
  user = User.find(params[:id])
  render json: user
end

def create 
  user = User.create!(user_params)
  if user.valid?
    render json: user, status: :created
  else
    render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  end
end

def update
  user = User.update!(user_params)
  render json: user
end





private

def user_params
  params.permit(:username, :password, :password_confirmation, :name, :image_url)
end

end
