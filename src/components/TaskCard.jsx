import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);
    return (
        <div className="bg-gray-800 text-white p-1 rounded-md">
            <h2 className="text-xl capitalize">{task.title}</h2>
            <p>{task.detail}</p>
            <button
                className="bg-slate-300 rounded-md mt-2 hover:bg-red-600"
                onClick={() => deleteTask(task.id)}
            >
                Borrar tarea
            </button>
        </div>
    );
}

export default TaskCard;
