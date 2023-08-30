# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Tasks', type: :request do
  describe 'GET #index' do
    it 'returns a list of all tasks' do
      task1 = Task.create(title: 'Task 1', description: 'Description 1', status: 'pending')
      task2 = Task.create(title: 'Task 2', description: 'Description 2', status: 'completed')

      get :index

      expect(response).to have_http_status(:ok)
      parsed_response = JSON.parse(response.body)

      expect(parsed_response.length).to eq(2)
      expect(parsed_response[0]['title']).to eq(task1.title)
      expect(parsed_response[1]['title']).to eq(task2.title)
    end
  end

  describe 'GET #show' do
    it 'returns a task by id' do
      task = Task.create(title: 'Sample Task', description: 'Description', status: 'pending')
      get :show, params: { id: task.id }
      expect(response).to have_http_status(:ok)
    end

    it 'does not return a task for non-existent ID' do
      get :show, params: { id: 999 }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe 'POST #create' do
    it 'creates a new task' do
      post :create, params: { task: { title: 'New Task', description: 'Description', status: 'pending' } }
      expect(response).to have_http_status(:created)
    end

    it 'does not create a new task with invalid attributes' do
      post :create, params: { task: { title: '', description: '', status: 'invalid_status' } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'PATCH #update' do
    it 'updates a task' do
      task = Task.create(title: 'Task to Update', description: 'Description', status: 'pending')
      patch :update, params: { id: task.id, task: { status: 'completed' } }
      expect(response).to have_http_status(:ok)
      task.reload
      expect(task.status).to eq('completed')
    end

    it 'does not update a task with invalid attributes' do
      task = Task.create(title: 'Task to Update', description: 'Description', status: 'pending')
      patch :update, params: { id: task.id, task: { status: 'invalid_status' } }
      expect(response).to have_http_status(:unprocessable_entity)
      task.reload
      expect(task.status).to_not eq('invalid_status')
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys a task' do
      task = Task.create(title: 'Task to Delete', description: 'Description', status: 'pending')
      expect do
        delete :destroy, params: { id: task.id }
      end.to change(Task, :count).by(-1)
      expect(response).to have_http_status(:no_content)
    end

    it 'does not destroy a non-existent task' do
      delete :destroy, params: { id: 999 }
      expect(response).to have_http_status(:not_found)
    end
  end
end
