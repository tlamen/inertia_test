import React from "react";
import { router, useForm } from '@inertiajs/react';
import { TextField, TextArea, SelectBox, Button } from '@switchdreams/ui'

const NewTaskPage = () => {
    const { data, setData, post } = useForm({ 
        title: '',
        description: '',
        status: ''     
    }
    ); 
    
    const submitTaskData = (e) => {
        router.post('/tasks/create', {
            task: {
                title: data.title,
                description: data.description,
                status: data.status
            }
        });
    };

    return(
        <div>
            <h1 className="text-3xl font-bold underline text-center">Criar nova Tarefa</h1>
            <form onSubmit={submitTaskData}>
                {/* <input type="text" value={data.tit} onChange={e => setData('name', e.target.value)}/> */}
                <TextField 
                    label="Título"
                    name="title"
                    onClickIcon={function io(){}}
                    placeholder="Nome da tarefa"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <TextArea 
                    label="Descrição"
                    name="description"
                    onClickIcon={function io(){}}
                    placeholder="Descrição da tarefa"
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
                    placeholder="Status"
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

export default NewTaskPage;