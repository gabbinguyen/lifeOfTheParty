class ItinerariesController < ApplicationController
    before_action :authenticate!, only: [:index,:show,:update,:destroy]

    def index
        itineraries = Itinerary.all
        render json: itineraries
    end

    def show
        itineary = Itinerary.find(params[:id])
        render json: itinerary
    end

    def create
        itinerary = Itinerary.create(itinerary_params)
        render json: itinerary 
    end

    def update
        Itinerary.find(params[:id]).update(itinerary_params)
    end

    private

    def itinerary_params
        params.require(:itinerary).permit(:event_id)
    end
end