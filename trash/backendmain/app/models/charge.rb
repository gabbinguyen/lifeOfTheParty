class Charge < ApplicationRecord
  belongs_to :collaborators
  belongs_to :expense
end
