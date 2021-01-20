class CreateFlights < ActiveRecord::Migration[6.0]
  def change
    create_table :flights do |t|
      t.integer :collaborator_id
      t.integer :event_id
      t.string :flight_info
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
