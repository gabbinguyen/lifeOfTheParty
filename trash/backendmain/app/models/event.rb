class Event < ApplicationRecord
  belongs_to :user 
  has_many :collaborators 
  has_many :itineraries
  has_many :expenses 
end
