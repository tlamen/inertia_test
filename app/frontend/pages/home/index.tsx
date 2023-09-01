import React from "react";
import {Tab} from "@switchdreams/ui"
import NewTaskPage from "../new_task_page";
import TasksIndex from "../tasks_index";

const Index = (tasks) => {
    return (
        <div className="flex-column">
            <Tab
                size="md"
                tabs={[
                    {
                    info: <TasksIndex tasks={tasks}/>,
                    name: 'Index'
                    },
                    {
                    info: <NewTaskPage />,
                    name: 'Criar Tarefa'
                    }
                ]}
                />
            
        </div>
    )
}

export default Index;