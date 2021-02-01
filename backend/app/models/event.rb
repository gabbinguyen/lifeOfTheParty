class Event < ApplicationRecord
  belongs_to :user 
  has_many :collaborators 
  has_many :activities
  has_many :accommodations
  has_many :flights
  has_many :expenses 
  has_many :charges, through: :expenses
end
