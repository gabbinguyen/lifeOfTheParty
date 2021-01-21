class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities
    end

    def show
        activity = Activity.find(params[:id])
        render json: activity
    end

    def update
        activity = Activity.find(params[:id])
        activity.update(activity_params)

        itinerary = Itinerary.find(activity.itinerary_id)

        render json: itinerary, include: :activity
    end

    def create
        activity = Activity.create(activity_params)
        render json: activity  
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