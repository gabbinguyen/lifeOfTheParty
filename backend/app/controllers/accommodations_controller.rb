class AccommodationsController < ApplicationController
    before_action :authenticate!, only: [:index,:show,:update,:destroy]

    def index
        accommodations = Accommodation.all
        render json: accommodations
    end

    def show
        accommodation = Accommodation.find(params[:id])
        render json: accommodation, include: [:event]
    end

    def update
        accommodation = Accommodation.find(params[:id])
        accommodation.update(accommodation_params)

        accommodation = Accommodation.find(accommodation.itinerary_id)

        render json: itinerary, include: :accommodation
    end

    def create
        accommodation = Accommodation.create(accommodation_params)
        events = Event.where(user: current_user)
        render json: events, include: [:activities, :accommodations, :expenses => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]
    end


    def destroy
        accommodation = Accommodation.find(params[:id])
        accommodation.destroy 
    end

    private

    def accommodation_params
        params.require(:accommodation).permit(:event_id, :location, :date);
    end
end

