class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.integer :itinerary_id
      t.string :description
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
