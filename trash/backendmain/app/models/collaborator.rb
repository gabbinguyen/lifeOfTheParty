class Collaborator < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_many :charges
  has_many :expenses
  has_many :flights

end
