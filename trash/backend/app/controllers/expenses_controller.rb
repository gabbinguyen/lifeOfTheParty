class ExpensesController < ApplicationController
    before_action :authorized, only: [:update, :create, :destroy]

    def update
        expense = Expense.find(params[:id])
        expense.update(expense_params)

        expense = Expense.find(expense.itinerary_id)

        render json: itinerary, include: :expense
    end

    def create
        expense = Expense.create(expense_params)
        render json: expense  
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