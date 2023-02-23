class SubCategory < ApplicationRecord
    has_many :flowers
    belongs_to :category
end
