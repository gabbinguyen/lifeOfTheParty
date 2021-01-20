class CreateAccommodations < ActiveRecord::Migration[6.0]
  def change
    create_table :accommodations do |t|
      t.integer :event_id
      t.string :location
      t.string :date

      t.timestamps
    end
  end
end
