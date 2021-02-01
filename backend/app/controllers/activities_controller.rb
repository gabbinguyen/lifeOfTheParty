class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities
    end

    def show
        activity = Activity.find(params[:id])
        render json: activity, include: [:event]
    end

    def update
        activity = Activity.find(params[:id])
        activity.update(activity_params)

        itinerary = Itinerary.find(activity.itinerary_id)

        render json: itinerary, include: :activity
    end

    def create
        activity = Activity.create(activity_params)
        events = Event.where(user: current_user)
        render json: events, include: [:activities, :accommodations, :expenses => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy 
    end

    private

    def activity_params
        params.require(:activity).permit(:event_id, :description, :date, :time);
    end
end