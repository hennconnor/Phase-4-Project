class ApplicationController < ActionController::API

    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    private

    def not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end

    def record_invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def current_user
        user = User.find_by(id: session[:user_id])
    end
end
