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
end
