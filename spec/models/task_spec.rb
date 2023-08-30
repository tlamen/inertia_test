require 'rails_helper'

RSpec.describe Task, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  # it 'is valid with valid attributes' do
  #   task = Task.new(
  #     title: 'Sample Task',
  #     description: 'This is a sample task',
  #     status: 'pending'
  #   )
  #   expect(task).to be_valid
  # end

  # it 'is not valid with blank attributes' do
  #   task = Task.new
  #   expect(task).to_not be_valid
  # end

  # it 'is not valid with invalid status' do
  #   task = Task.new(
  #     title: 'Invalid Status Task',
  #     description: 'Task with invalid status',
  #     status: 'invalid_status'
  #   )
  #   expect(task).to_not be_valid
  # end

  # it 'is not valid with duplicated title' do
  #   Task.create(
  #     title: 'Duplicated Task',
  #     description: 'First task with duplicated title',
  #     status: 'pending'
  #   )
    
  #   duplicated_task = Task.new(
  #     title: 'Duplicated Task',
  #     description: 'Second task with duplicated title',
  #     status: 'completed'
  #   )
    
  #   expect(duplicated_task).to_not be_valid
  # end
end
