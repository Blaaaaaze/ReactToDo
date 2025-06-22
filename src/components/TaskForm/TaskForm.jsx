import { useState } from 'react'
import styles from './TaskForm.module.css'

const TaskForm = ({onAddTask}) => {
    const [title, setTitle] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        if (!title.trim()) {
            
            return
        }

        onAddTask({
            title,
            id: Math.random().toString()
        })
        setTitle('')
    }

    return <div className={styles.formContainer}>
        <input type="text" className={styles.formInput} placeholder='Название вашей задачи' value={title} onChange={(event) => setTitle(event.target.value)}/>
        <button className={styles.btn} type='submit' onClick={onSubmit}>Добавить</button>
    </div>
}

export default TaskForm