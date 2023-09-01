# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    tasks = Task.all
    render inertia: 'home/index', props: {
      tasks: tasks
    }, status: :ok
  end

  def create
    Task.create!(task_params)
    redirect_to tasks_path
  rescue StandardError => e
    redirect_to tasks_path, inertia: { errors: e }
  end

  def update
    task = Task.find(params[:id])
    task.update!(task_params)
    redirect_to tasks_path
  rescue StandardError => e
    redirect_to tasks_path, inertia: { errors: e }
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy!
    redirect_to tasks_path
  rescue StandardError => e
    redirect_to tasks_path, inertia: { errors: e }
  end

  private

  def task_params
    params.require(:task).permit(
      'title',
      'description',
      'status'
    )
  end
end
