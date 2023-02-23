class SearchesController < ApplicationController

def search
    @range = params[:range]
    if @range == "花の名前"
        @flowers = Flower.where("name like ?", "%#{params[:word]}%")
        render "/searches/search_result"
    else
        @flower_words = FlowerWord.where("word like ?", "%#{params[:word]}%")
        @flowers = Set.new
        @flower_words.each do |word|
            @flowers.add(Flower.find(word.flower_id))
        end
        @flowers.to_a
        render "/searches/search_result"
    end
    
end

def search_result
end


end
