import styles from './DeleteButton.module.css'

interface Props {
    onAction: () => void 
}

export const DeleteButton = ({onAction}: Props) => (
    <button
       type="button"
       className={styles.deleteButton}
       onClick={onAction}
    >
      Удалить
    </button>
)