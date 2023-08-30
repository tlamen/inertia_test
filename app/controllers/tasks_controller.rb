# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    tasks = Task.all
    render inertia: 'home/index', props: {
      tasks: tasks
    }, status: :ok
  end
end
