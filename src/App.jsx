import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import React, { useState, useEffect } from "react";
import { tasks as data } from "./Tasks";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(taskTitle, taskDetail) {
        setTasks([
            ...tasks,
            {
                title: taskTitle,
                id: tasks.length,
                detail: taskDetail,
            },
        ]);
    }

    return (
        <>
            <TaskForm createTask={createTask} />
            <TaskList tasks={tasks} />
        </>
    );
}

export default App;
