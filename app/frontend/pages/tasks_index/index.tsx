import React from "react";
import { AccordionMenu, Button } from "@switchdreams/ui"
import { Link, router } from "@inertiajs/react";
import UpdateTaskPage from "../update_task_page";

const TasksIndex = (tasks) => {

    const handleDelete = (task) => {
        router.delete(`/tasks/${task.id}`, {
            onSuccess: () => {
                alert("Tarefa deletada com sucesso")
            },
            onError: (e) => alert(e),
        },)
    }

    return (
        <div className="flex-column p-5">
            <h1 className="text-3xl font-bold underline text-center">Minhas tarefas</h1>
            {tasks.tasks.tasks.map((t) => 
                <AccordionMenu
                size="md"
                title={t.title}
                key={t.id}
              >
                <p className="p-5">Descrição: {t.description}</p>
                <p className="p-5">status: {t.status}</p>
                <AccordionMenu
                size="sm"
                title="atualizar"
                key={t.id}
                classname="p-5"
                >
                    <UpdateTaskPage task={t}/>
                </AccordionMenu>
                <Button
                    label="Deletar"
                    size="md"
                    variant="primary"
                    onClick={() => handleDelete(t)}
                />
              </AccordionMenu>
            
            )}
            
        </div>
    )
}

export default TasksIndex;