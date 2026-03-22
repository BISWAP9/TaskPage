import { useFocusTransitionCount } from 'shared'

export const useFocusTracker = () => {
  const result = useFocusTransitionCount()
  return {
    ...result,
    handleFocusFirst: result.focusFirst,
  }
}
