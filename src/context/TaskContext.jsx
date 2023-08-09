import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
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
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
