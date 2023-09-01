import React from "react";
import { AccordionMenu } from "@switchdreams/ui"

const TasksIndex = (tasks) => {
    return (
        <div className="flex-column">
            <h1 className="text-3xl font-bold underline text-center">Minhas tarefas</h1>
            {tasks.tasks.tasks.map((t) => 
                <AccordionMenu
                size="md"
                title={t.title}
              >
                <p className="p-5">{t.description}</p>
                <p className="p-5">status: {t.status}</p>
              </AccordionMenu>
            
            )}
        </div>
    )
}

export default TasksIndex;