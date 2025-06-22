import Task from '../Task/Task'
import styles from './TasksList.module.css'

const TasksList = ({tasks, setTasks}) => {
    return <div>
        {tasks.map((task) => 
        <Task 
        task={task.title} 
        key={task.id} 
        onDelete={() => {
            setTasks(tasks.filter(currentTask => currentTask.id !== task.id))}}/>
        )}
    </div>
}

export default TasksList