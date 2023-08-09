function TaskCard({ task, deleteTask }) {
    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.detail}</p>
            <button onClick={() => deleteTask(task.id)}>Borrar tarea</button>
        </div>
    );
}

export default TaskCard;
