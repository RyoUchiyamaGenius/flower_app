class CreateFlowers < ActiveRecord::Migration[7.0]
  def change
    create_table :flowers do |t|
      t.string :name
      t.text :about
      t.string :date
      t.string :sub_category_id
      t.string :image_url
      t.string :cv_url
      

      t.timestamps
    end
  end
end
