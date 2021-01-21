class EventsController < ApplicationController
    before_action :authenticate!, only: [:index,:show,:update,:destroy]

    def index
        if current_user 
            events = Event.where(user: current_user)
            render json: events, include: [:activities, :accommodations, :flights, :expenses]
        else 
            render :json => { :msg => "Please log in" }
        end
    end

    def show
        if current_user
            event = Event.find_by(id: params[:id])
            render json: event, include: [:activities, :accommodations, :flights, :expenses]
        
        else
            render :json => { :msg => "Please log in"}
        end
    end

    def create
        event = Event.new(event_params)
        event.user = current_user
        if event.save
            render :json => event.as_json(only: [:name, :date, :location])
        else
            render :json => { :msg => "Could not create event"}
        end
    end
    
    def update
        event = Event.find(params[:id])
        if event.user == current_user
            event.update(event_params)
            render json: event 
        else 
            render :json => { :msg => "Could not update event"}
        end
    end

    def destroy
        event = Event.find(params[:id])
        if event.user == current_user
            event.destroy
        else 
            render :json => { :msg => "Could not delete event"}
        end
    end

    private
    def event_params
        params.require(:event).permit(:name, :date, :location)
    end

end
