class FlightsController < ApplicationController
    def index
        flights = Flight.all
        render json: flights
    end

    def show
        flight = Flight.find(params[:id])
        render json: flight
    end


    def update
        flight = Flight.find(params[:id])
        flight.update(flight_params)

        flight = Flight.find(flight.itinerary_id)

        render json: itinerary, include: :flight
    end

    def create
        flight = Flight.create(flight_params)
        render json: flight  
    end

    def destroy
        flight = Flight.find(params[:id])
        flight.destroy 
    end

    private

    def flight_params
        params.require(:flight).permit(:collaborator_id, :itinerary_id, :flight_info, :date, :time);
    end
end