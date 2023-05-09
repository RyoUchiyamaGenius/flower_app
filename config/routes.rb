Rails.application.routes.draw do
  root "static_pages#home"
  get "/about", to: "static_pages#about"
  get "/contact", to: "static_pages#contact"
  get "/terms", to: "static_pages#terms"

  get "search", to: "searches#search"
  get "search_result", to: "searches#search_result"
  get "category_search", to: "searches#category_search"
  get "birthday_search", to: "searches#birthday_search"
  get "searches/:id", to: "searches#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
