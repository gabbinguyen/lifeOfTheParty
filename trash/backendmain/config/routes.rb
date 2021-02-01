Rails.application.routes.draw do
  resources :users 
  resources :events 
  resources :collaborators
  resources :itinerary
  resources :activities
  resources :accommodations
  resources :flights
  resources :expenses
  resources :charges 
  
  post '/login', to: 'auth#create'
  delete '/logout', to: 'auth#destroy'
  get '/logged_in', to: 'application#logged_in?'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
