class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.integer :collaborator_id
      t.integer :event_id
      t.string :description
      t.float :total

      t.timestamps
    end
  end
end
