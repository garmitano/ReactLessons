import { useState } from "react";

function TaskForm({ createTask }) {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, detail);
        setTitle("");
        setDetail("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nombre de la tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
            />
            <input
                placeholder="Detalle de la tarea"
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
