class CreateItineraries < ActiveRecord::Migration[6.0]
  def change
    create_table :itineraries do |t|
      t.integer :event_id

      t.timestamps
    end
  end
end
