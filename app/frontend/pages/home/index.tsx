import React from "react";
import Navbar from "../../components/navbar";

const Index = (tasks) => {
    tasks.tasks.map((t) => {console.log(t.title)})
    // console.log(tasks.tasks[0].title)
    return (
        <div className="flex-column">
            <Navbar />
            <h1 className="text-3xl font-bold underline">Hello World</h1>
            {tasks.tasks.map((t) => t.title)}
        </div>
    )
}

export default Index;