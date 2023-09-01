# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'tasks#index'

  # get  '/tasks', to:'tasks#index'
  # post '/tasks', to:'tasks#create'
  # patch '/tasks/:id', to: 'tasks#update'
  # delete '/tasks/:id', to: 'tasks#delete'
  resources :tasks
end
