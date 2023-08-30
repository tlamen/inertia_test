class TasksController < ApplicationController
    def index
        p "Testeee"
        render inertia: "home/index"
    end
end
