import { layout, prepare } from '@chenglou/pretext'
import { type RefObject, useEffect } from 'react'

export function usePretextHeight(ref: RefObject<HTMLElement | null>, text: string) {
  useEffect(() => {
    const element = ref.current
    if (!element || typeof ResizeObserver === 'undefined') return

    let prepared: ReturnType<typeof prepare> | null = null

    const measure = async () => {
      await document.fonts.ready
      const styles = getComputedStyle(element)
      const font = `${styles.fontWeight} ${styles.fontSize} "Source Sans 3 Variable"`
      const lineHeight = Number.parseFloat(styles.lineHeight)
      prepared = prepare(text, font, {
        letterSpacing: Number.parseFloat(styles.letterSpacing) || 0,
      })
      const result = layout(prepared, element.clientWidth, lineHeight)
      element.style.minHeight = `${result.height}px`
      element.dataset.pretextLines = String(result.lineCount)
    }

    void measure()
    const observer = new ResizeObserver(() => {
      if (!prepared) return
      const styles = getComputedStyle(element)
      const result = layout(prepared, element.clientWidth, Number.parseFloat(styles.lineHeight))
      element.style.minHeight = `${result.height}px`
      element.dataset.pretextLines = String(result.lineCount)
    })
    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, text])
}
