class ExpensesController < ApplicationController
    def index
        expenses = Expense.all
        render json: expenses, include: [:collaborator => {:include => [:user]}]
    end

    def show
        expense = Expense.find(params[:id])
        render json: expense, include: [:event, :collaborator => {:include => [:user]}]
    end

    def update
        expense = Expense.find(params[:id])
        expense.update(expense_params)

        expense = Expense.find(expense.itinerary_id)

        render json: itinerary, include: :expense
    end

    def create
        expense = Expense.create(expense_params)
        events = Event.where(user: current_user)
        render json: events, include: [:activities, :accommodations, :expenses => {:include => [:collaborator => {:include => [:user]}]}, :collaborators => {:include => [:user, :flight => {:only => [:flight_info]}]}, :flights => {:include => [:collaborator => {:include => [:user]}]}]
    end

    def destroy
        expense = Expense.find(params[:id])
        expense.destroy 
    end

    private

    def expense_params
        params.require(:expense).permit(:collaborator_id, :event_id, :description, :total);
    end
end