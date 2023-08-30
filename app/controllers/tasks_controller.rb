class TasksController < ApplicationController
    def index
        tasks = Task.all
        render inertia: "home/index", props: {
            tasks: tasks
        }
    end
end
