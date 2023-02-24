class RenameCategoryColumnToSubCategories < ActiveRecord::Migration[7.0]
  def change
    rename_column :sub_categories, :category, :category_id
  end
end
