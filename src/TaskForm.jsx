import { useState, useTransition } from "react";

function TaskForm({ createTask }) {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        createTask(title, detail);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nombre de la tarea"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                placeholder="Detalle de la tarea"
                onChange={(e) => setDetail(e.target.value)}
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
