import React from "react";
import Navbar from "../../components/navbar";

const Index = (tasks) => {
    tasks.tasks.map((t) => {console.log(t.title)})
    // console.log(tasks.tasks[0].title)
    return (
        <>
            <Navbar />
            <h1>Hello World</h1>
            {tasks.tasks.map((t) => t.title)}
        </>
    )
}

export default Index;