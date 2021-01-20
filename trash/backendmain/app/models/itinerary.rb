class Itinerary < ApplicationRecord
  belongs_to :event
  has_many :activities
  has_many :accommodations
  has_many :flights
end
