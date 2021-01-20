class ChargesController < ApplicationController

    def index
        charges = Charge.all
        render json: charges
    end

    def show
        charge = Charge.find(params[:id])
        render json: charge
    end

    def update
        charge = Charge.find(params[:id])
        charge.update(charge_params)

        charge = Itinerary.find(charge.itinerary_id)

        render json: itinerary, include: :charge
    end

    def create
        charge = Charge.create(charge_params)
        render json: charge  
    end

    def destroy
        charge = Charge.find(params[:id])
        charge.destroy 
    end

    private

    def charge_params
        params.require(:charge).permit(:collaborator_id, :expense_id, :cost_per);
    end
end