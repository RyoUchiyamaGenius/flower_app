class SubCategory < ApplicationRecord
    has_many :flowers
    belongs_to :categories
end
