class EventsController < ApplicationController
    before_action :authenticate!, only: [:index,:show,:update,:destroy]

    def index
        if current_user 
            events = Event.where(user: current_user)
            render json: events, include: [:activities, :accommodations, :expenses => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]

            # render json: events, include: [:activities, :accommodations, :flights, :expenses, :collaborators => {:include => [:user, :flight]}]
        else 
            render :json => { :msg => "Please log in" }
        end
    end

    def show
        if current_user
            event = Event.find_by(id: params[:id])
            render json: event, include: [:activities, :accommodations, :flights, :expenses, :collaborators]
        
        else
            render :json => { :msg => "Please log in"}
        end
    end

    def create
        event = Event.new(event_params)
        event.user = current_user
        event.save
        collaborator = Collaborator.create(user_id: current_user.id, event_id: event.id)
        events = Event.where(user: current_user)
        render json: events, include: [:activities, :accommodations, :expenses => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]
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
