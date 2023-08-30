require 'rails_helper'

RSpec.describe Task, type: :model do
  it 'is valid with valid attributes' do
    task = Task.new(
      nome: 'Sample Task',
      descrição: 'This is a sample task',
      status: 'pending'
    )
    expect(task).to be_valid
  end

  it 'is not valid with blank attributes' do
    task = Task.new
    expect(task).to_not be_valid
  end

  it 'is not valid with invalid status' do
    task = Task.new(
      nome: 'Invalid Status Task',
      descrição: 'Task with invalid status',
      status: 'invalid_status'
    )
    expect(task).to_not be_valid
  end
end
