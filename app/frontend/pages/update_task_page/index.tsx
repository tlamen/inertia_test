import React from "react";
import { useForm, router } from '@inertiajs/react';
import { TextField, TextArea, SelectBox, Button } from '@switchdreams/ui'

const UpdateTaskPage = (task) => {
    const { data, setData } = useForm({ 
        title: task.title,
        description: task.description,
        status: task.status
    }
    ); 
    
    const submitTaskData = (e) => {
        router.patch(`/tasks/${task.task.id}`, {
            task: {
                title: data.title,
                description: data.description,
                status: data.status
            }},
            {
                onSuccess: () => {
                    alert("Tarefa atualizada com sucesso")
                },
                onError: (e) => alert(e),
            },
        );
    };

    return(
        <div>
            <h1 className="text-3xl font-bold underline text-center">Atualizar Tarefa</h1>
            <form onSubmit={submitTaskData}>
                <TextField 
                    label="Título"
                    name="title"
                    onClickIcon={function io(){}}
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <TextArea 
                    label="Descrição"
                    name="description"
                    onClickIcon={function io(){}}
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                <SelectBox
                    label="Status:"
                    options={[
                        {
                            label: 'pendente',
                            value: 'pending'
                        },
                        {
                            label: 'em andamento',
                            value: 'in_progress'
                        },
                        {
                            label: 'concluído',
                            value: 'completed'
                        },
                        {
                            label: 'suspensa',
                            value: 'suspended'
                        }
                    ]}
                    size="md"
                    value={data.status}
                    onChange={(e) => setData("status", e)}
                />

                {/* <input type="submit" value="Submit"/> */}
                
            </form>

            <Button
                label="Enviar"
                size="md"
                variant="primary"
                onClick={() => submitTaskData(data)}
            />
        </div>
    )
}

export default UpdateTaskPage;