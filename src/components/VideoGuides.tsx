import { ArrowRight, Pause, Play, Sparkle } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { asset } from '../lib/assets'
import { videoGuides } from '../videoContent'

export function VideoGuides() {
  const [activeId, setActiveId] = useState(videoGuides[0].id)
  const [beatIndex, setBeatIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const reduceMotion = useReducedMotion()
  const guide = videoGuides.find((item) => item.id === activeId) ?? videoGuides[0]
  const beat = guide.beats[beatIndex]

  useEffect(() => {
    if (!playing || reduceMotion) return
    const timer = window.setTimeout(() => {
      if (beatIndex >= guide.beats.length - 1) {
        setPlaying(false)
        return
      }
      setBeatIndex((current) => current + 1)
    }, 2_800)
    return () => window.clearTimeout(timer)
  }, [beatIndex, guide.beats.length, playing, reduceMotion])

  const selectGuide = (id: string) => {
    setActiveId(id)
    setBeatIndex(0)
    setPlaying(false)
  }

  const togglePlayback = () => {
    if (reduceMotion) {
      setBeatIndex((current) => (current + 1) % guide.beats.length)
      return
    }
    if (!playing && beatIndex === guide.beats.length - 1) setBeatIndex(0)
    setPlaying((current) => !current)
  }

  return (
    <section className="videos-section" id="videos" aria-labelledby="videos-title">
      <div className="shell">
        <div className="videos-heading">
          <div>
            <p className="section-kicker">Interactive video storyboards</p>
            <h2 id="videos-title">See the decision before you shop</h2>
          </div>
          <p className="section-lede">Four short, production-ready explainers turn the most consequential garage choices into a visual sequence. Preview each script beat, then jump into the planner.</p>
        </div>

        <div className="video-tabs" aria-label="Video guide topics">
          {videoGuides.map((item) => (
            <button
              aria-pressed={item.id === activeId}
              key={item.id}
              onClick={() => selectGuide(item.id)}
              type="button"
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <small>{item.duration}</small>
            </button>
          ))}
        </div>

        <div className="video-stage">
          <div className="storyboard-player">
            <img
              src={asset(guide.poster)}
              alt={guide.posterAlt}
              width={guide.posterWidth}
              height={guide.posterHeight}
              loading="lazy"
              decoding="async"
            />
            <div className="storyboard-player__scrim" />
            <motion.div
              className="storyboard-frame"
              key={`${guide.id}-${beatIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              aria-live="polite"
            >
              <span>{beat.time} · {beat.label}</span>
              <h3>{beat.onScreen}</h3>
              <p>{beat.voiceover}</p>
            </motion.div>
            <button className="storyboard-play" onClick={togglePlayback} type="button">
              {playing ? <Pause size={22} weight="fill" aria-hidden="true" /> : <Play size={22} weight="fill" aria-hidden="true" />}
              {reduceMotion ? 'Next beat' : playing ? 'Pause storyboard' : beatIndex === guide.beats.length - 1 ? 'Replay storyboard' : 'Play storyboard'}
            </button>
            <div className="storyboard-progress" aria-label={`Beat ${beatIndex + 1} of ${guide.beats.length}`}>
              {guide.beats.map((item, index) => (
                <button
                  aria-label={`Show ${item.time} ${item.label}`}
                  aria-pressed={index === beatIndex}
                  key={item.time}
                  onClick={() => {
                    setBeatIndex(index)
                    setPlaying(false)
                  }}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="video-script">
            <div className="video-script__intro">
              <span>{guide.hookFamily} · {guide.duration}</span>
              <h3>{guide.title}</h3>
              <p>{guide.outcome}</p>
            </div>
            <div className="video-beats">
              {guide.beats.map((item, index) => (
                <button
                  aria-pressed={index === beatIndex}
                  key={item.time}
                  onClick={() => {
                    setBeatIndex(index)
                    setPlaying(false)
                  }}
                  type="button"
                >
                  <span>{item.time}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <small>{item.visual}</small>
                  </div>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="video-disclosure">
          <Sparkle size={22} weight="duotone" aria-hidden="true" />
          <p><strong>Storyboard disclosure:</strong> preview imagery is AI-generated and no finished video is represented here. Product specifications in a final edit must be checked against the current official page.</p>
          <a href="#advisor">Build my garage plan <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
