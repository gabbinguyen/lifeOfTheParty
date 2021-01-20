class Flight < ApplicationRecord
  belongs_to :collaborator
  belongs_to :event 
end
