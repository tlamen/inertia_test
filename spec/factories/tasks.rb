# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    title { 'MyString' }
    description { 'MyString' }
    status { 'pending' }
  end
end
