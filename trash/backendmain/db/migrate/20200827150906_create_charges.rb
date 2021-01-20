class CreateCharges < ActiveRecord::Migration[6.0]
  def change
    create_table :charges do |t|
      t.integer :collaborator_id
      t.integer :expense_id
      t.float :cost_per

      t.timestamps
    end
  end
end
