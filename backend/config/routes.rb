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

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create' 
  post '/events', to: 'events#create'  


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
