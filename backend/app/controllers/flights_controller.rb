class FlightsController < ApplicationController
    def index
        flights = Flight.all
        render json: flights, include: [:collaborator]
    end

    def show
        flight = Flight.find(params[:id])
        render json: flight, include: [:event, :collaborator => {:include => [:user]}] 
        end


    def update
        flight = Flight.find(params[:id])
        flight.update(flight_params)

        flight = Flight.find(flight.itinerary_id)

        render json: itinerary, include: :flight
    end

    def create
        flight = Flight.create(flight_params)
        events = Event.where(user: current_user)
        render json: events, include: [:activities, :accommodations, :expenses => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]
    end

    def destroy
        flight = Flight.find(params[:id])
        flight.destroy 
    end

    private

    def flight_params
        params.require(:flight).permit(:collaborator_id, :event_id, :flight_info, :date, :time);
    end
end