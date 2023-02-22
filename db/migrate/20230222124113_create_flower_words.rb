class CreateFlowerWords < ActiveRecord::Migration[7.0]
  def change
    create_table :flower_words do |t|
      t.string :color
      t.string :word
      t.integer :flower_id

      t.timestamps
    end
  end
end
