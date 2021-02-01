class Expense < ApplicationRecord
  belongs_to :collaborator
  belongs_to :event
  has_many :charges
end
