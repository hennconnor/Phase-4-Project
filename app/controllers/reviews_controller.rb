class ReviewsController < ApplicationController

    before_action :find_review, only: [:show, :update, :destroy]

    def index
        render json: Review.all
    end

    def show
        render json: @review
    end

    def update
        @review.update!(review_params)
        render json: @review
    end

    def destroy
        @review.destroy
        head :no_content
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:comment, :rating, :user_id, :restaurant_id)
    end

    def find_review
        @review = Review.find(params[:id])
    end
end
