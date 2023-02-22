class Flower < ApplicationRecord
    has_many :flower_words
    belongs_to :sub_categories
end
