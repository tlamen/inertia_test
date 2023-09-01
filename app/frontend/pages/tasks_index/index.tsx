import React from "react";

const TasksIndex = (tasks) => {
    return (
        <div className="flex-column">
            <h1 className="text-3xl font-bold underline text-center">Minhas tarefas</h1>
            {tasks.tasks.tasks.map((t) => t.title)}
        </div>
    )
}

export default TasksIndex;