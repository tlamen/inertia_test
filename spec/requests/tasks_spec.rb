# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Tasks', type: :request do
  describe 'POST #create' do
    it 'creates a new task' do
      expect do
        post '/tasks', params: { task: { title: 'New Task', description: 'Description', status: 'pending' } }
      end.to change(Task, :count).by(1)
    end

    it 'does not create a new task with invalid attributes' do
      expect do
        post '/tasks', params: { task: { title: 'New Task', description: 'Description', status: 'invalid_status' } }
      end.to change(Task, :count).by(0)
    end
  end

  describe 'PATCH #update' do
    it 'updates a task' do
      task = Task.create(title: 'Task to Update', description: 'Description', status: 'pending')
      patch "/tasks/#{task.id}", params: { task: { title: 'Task to Update', description: 'Description', status: 'completed' } }
      task = Task.find(task.id)
      expect(task.status).to eq("completed")
    end

    it 'does not update a task with invalid attributes' do
      task = Task.create(title: 'Task to Update', description: 'Description', status: 'pending')
      patch "/tasks/#{task.id}", params: { id: task.id, task: { title: 'Task to Update', description: 'Description', status: 'invalid_status' } }
      task = Task.find(task.id)
      expect(task.status).to_not eq('invalid_status')
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys a task' do
      task = Task.create(title: 'Task to Delete', description: 'Description', status: 'pending')
      expect do
        delete "/tasks/#{task.id}"
      end.to change(Task, :count).by(-1)
    end

    it 'does not destroy a non-existent task' do
      expect do
        delete "/tasks/999"
      end.to change(Task, :count).by(0)
    end
  end
end
