function TaskList(props) {
    if (props.tasks.length === 0) {
        return <h1>No hay tareas</h1>;
    }
    return (
        <div>
            {props.tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.detail}</p>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
