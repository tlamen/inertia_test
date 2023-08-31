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
    redirect_to new_task_path, inertia: { errors: e }
  end


  private

  def params
    task_params.require(:task).permit(
      'title',
      'description',
      'status'
    )
  end
end
