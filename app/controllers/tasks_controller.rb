class TasksController < ApplicationController
    def index
        render inertia: "index"
    end
end
