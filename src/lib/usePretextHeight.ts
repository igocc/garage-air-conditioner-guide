import { layout, prepare } from '@chenglou/pretext'
import { type RefObject, useEffect } from 'react'

export function usePretextHeight(ref: RefObject<HTMLElement | null>, text: string) {
  useEffect(() => {
    const element = ref.current
    if (!element || typeof ResizeObserver === 'undefined') return

    let prepared: ReturnType<typeof prepare> | null = null
    let frame: number | null = null
    let lastWidth = -1

    const applyLayout = () => {
      if (!prepared) return
      const width = element.clientWidth
      if (width <= 0 || width === lastWidth) return
      lastWidth = width
      const styles = getComputedStyle(element)
      const result = layout(prepared, width, Number.parseFloat(styles.lineHeight))
      const minHeight = `${result.height}px`
      const lineCount = String(result.lineCount)
      if (element.style.minHeight !== minHeight) element.style.minHeight = minHeight
      if (element.dataset.pretextLines !== lineCount) element.dataset.pretextLines = lineCount
    }

    const measure = async () => {
      await document.fonts.ready
      const styles = getComputedStyle(element)
      const font = `${styles.fontWeight} ${styles.fontSize} "Source Sans 3 Variable"`
      prepared = prepare(text, font, {
        letterSpacing: Number.parseFloat(styles.letterSpacing) || 0,
      })
      lastWidth = -1
      applyLayout()
    }

    void measure()
    const observer = new ResizeObserver(() => {
      if (frame !== null) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        frame = null
        applyLayout()
      })
    })
    observer.observe(element)

    return () => {
      observer.disconnect()
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [ref, text])
}
