class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :name
      t.string :date
      t.string :location
      t.string :guest_list

      t.timestamps
    end
  end
end
