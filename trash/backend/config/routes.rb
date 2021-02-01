Rails.application.routes.draw do
  post 'api/auth/login',    to: 'users#login'
  post '/register', to: 'users#create'
  get  '/current_user',  to: 'users#current_user'
  
  resources :users 
  resources :events 
  resources :collaborators
  resources :itinerary
  resources :activities
  resources :accommodations
  resources :flights
  resources :expenses
  resources :charges 
end
