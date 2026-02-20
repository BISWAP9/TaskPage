import type { ReactNode } from 'react'
import styles from './FilterButton.module.css'

interface Props {
  active?: boolean
  onAction: () => void
  children: ReactNode
}

export const FilterButton = ({ active = false, onAction, children }: Props) =>  (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.buttonActive : ''}`}
      onClick={onAction}
    >
      {children}
    </button>
  )
