class RestaurantsController < ApplicationController
    def index
        render json: Restaurant.all
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end

    private

    def restaurant_params
        params.permit(:name, :description, :image_url)
    end
end
