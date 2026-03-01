import type { ReactNode } from 'react'
import styles from './FilterButton.module.css'

interface Props {
  active?: boolean
  onAction: () => void
  children: ReactNode
  ariaLabel?: string
}

export const FilterButton = ({ active = false, onAction, ariaLabel, children }: Props) =>  (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.buttonActive : ''}`}
      onClick={onAction}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
