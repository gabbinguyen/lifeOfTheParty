class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def show
        event = Event.find_by(id: params[:id])
        render json: event
    end

    def create
        event = Event.create(event_params)
        render json: event
    end
    
    def update
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event 
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
    end

    private
    def event_params
        params.require(:event).permit(:user_id, :name, :date, :location)
    end

end
