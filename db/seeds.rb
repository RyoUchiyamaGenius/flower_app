# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "csv"

flowers_csv = CSV.readlines("db/flowers_3.csv")
flowers_csv.shift
flowers_csv.each do |row|
    Flower.create(name: row[2], date: row[1], sub_category_id: row[4])
end
