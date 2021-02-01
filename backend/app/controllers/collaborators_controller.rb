class CollaboratorsController < ApplicationController
    before_action :authenticate!, only: [:index,:show,:update,:destroy]

    def index
        collaborators = Collaborator.all
        render json: collaborators, include: [:flight]
    end

    def show
        collaborator = Collaborator.find(params[:id])
        render json: collaborator, include: [:event]
    end

    def create
        collaborator = Collaborator.create(collaborator_params)
        events = Event.where(user: current_user)
        render json: events, include: [:activities, :accommodations, :expenses  => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]
    end


    def destroy
        collaborator = Collaborator.find(params[:id])
        collaborator.destroy 
    end

    private

    def collaborator_params
        params.require(:collaborator).permit(:event_id, :user_id)
    end
end

