class AccommodationsController < ApplicationController
    before_action :authorized, only: [:update, :create, :destroy]

    def update
        accommodation = Accommodation.find(params[:id])
        accommodation.update(accommodation_params)

        accommodation = Accommodation.find(accommodation.itinerary_id)

        render json: itinerary, include: :accommodation
    end

    def create
        accommodation = Accommodation.create(accommodation_params)
        render json: accommodation  
    end

    def destroy
        accommodation = Accommodation.find(params[:id])
        accommodation.destroy 
    end

    private

    def accommodation_params
        params.require(:accommodation).permit(:itinerary_id, :location, :date);
    end
end