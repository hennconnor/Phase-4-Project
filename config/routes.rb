Rails.application.routes.draw do
  resources :reviews
  resources :restaurants, only: [:index, :show, :create]
  resources :users, only: [:show, :create, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
