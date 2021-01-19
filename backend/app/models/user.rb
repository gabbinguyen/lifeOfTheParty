class User < ApplicationRecord
  has_secure_password

  has_many :events
  has_many :collaborators
  has_many :flights, through: :collaborators
  has_many :expenses, through: :collaborators
  has_many :charges, through: :collaborators

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 5..20 }
end
