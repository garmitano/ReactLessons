import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import React, { useState, useEffect } from "react";
import { tasks as data } from "./data/Tasks";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(taskTitle, taskDetail) {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: taskTitle,
                detail: taskDetail,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <>
            <TaskForm createTask={createTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </>
    );
}

export default App;
