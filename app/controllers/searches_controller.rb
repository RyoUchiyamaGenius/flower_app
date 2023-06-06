class SearchesController < ApplicationController

def search
    @range = params[:range]
    if @range == "花の名前"
        @flowers = Flower.where("name like ?", "%#{params[:word]}%").page(params[:page]).per(12)
        render "/searches/search_result"
    else
        @flower_words = FlowerWord.where("word like ?", "%#{params[:word]}%")
        @flowers = Set.new
        @flower_words.each do |word|
            @flowers.add(Flower.find(word.flower_id))
        end
        @flowers = @flowers.to_a
        @flowers = Kaminari.paginate_array(@flowers).page(params[:page]).per(12)
        render "/searches/search_result"
    end
end

def search_result
end

def category_search
    @sub_category = SubCategory.find(params[:sub_category])
    @flowers = Flower.where("sub_category_id like ?", "%,#{@sub_category.id},%").page(params[:page]).per(12)
    render "/searches/search_result"
end

def birthday_search
    @birthday = params["birthday(2i)"].to_i * 100 + params["birthday(3i)"].to_i
    @birthday = sprintf("%04d", @birthday)
    @flowers = Flower.where("date like ?", "%#{@birthday}%").page(params[:page]).per(12)
    render "/searches/search_result"
end

def show
    @flower = Flower.find(params[:id])
end

end
