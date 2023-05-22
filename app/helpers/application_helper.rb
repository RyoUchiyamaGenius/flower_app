module ApplicationHelper
    def make_number_to_date(number)
        month = number[0,2].to_i
        day = number[2,4].to_i
        return "#{month}月#{day}日"
    end

    def get_birthdays(numbers)
        number_array = numbers.split(",")
        birthdays = []
        number_array.each do |number|
            birthdays.append(make_number_to_date(number))
        end
        return birthdays
    end

    def get_flower_words(id)
        flower_words = FlowerWord.where(flower_id: id)
        words = []
        flower_words.each do |flower_word|
            words.append(flower_word[:word])
        end
        return words
    end

    def get_situations(numbers)
        situations = []
        sub_category_id = numbers.split(",")[1..-1].map!{|x| x.to_i}
        sub_category_id.each do |id|
            situations.append(SubCategory.find(id)[:name])
        end
        return situations
    end
end
