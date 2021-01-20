class ActivitiesController < ApplicationController
    before_action :authorized, only: [:update, :create, :destroy]

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
        params.require(:activity).permit(:itinerary_id, :description, :date, :time);
    end
end