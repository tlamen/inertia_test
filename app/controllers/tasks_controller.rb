class TasksController < ApplicationController
    def index
        p "Oiiiiii"
        render inertia: "home/index"
    end
end
