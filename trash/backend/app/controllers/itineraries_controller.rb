class ItinerariesController < ApplicationController
    before_action :authorized, only: [:create, :update]

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