import styles from './Task.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({task, onDelete}) => {
    return <div className={styles.container}>
        <h2 className={styles.title}>{task}</h2>
        <button className={styles.deleteBtn} onClick={onDelete} title='Удалить'>
            <FontAwesomeIcon icon={faTrash} className={styles.deleteImage}/>
        </button>
    </div>
}

export default Task