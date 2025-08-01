'use client'

import { useState, useRef, useEffect, type JSX } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Volume2, VolumeX, Music, Pause, Play } from 'lucide-react'

export function BackgroundMusic(): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0.3)
  const [showControls, setShowControls] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, isMuted, volume])

  const togglePlay = (): void => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = (): void => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(parseFloat(e.target.value))
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/music/background-ambient.mp3" loop preload="auto" />

      {/* Main Music Button */}
      <motion.button
        className={`w-14 h-14 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 ${
          isDark
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            : 'bg-black/10 border-black/20 text-black hover:bg-black/20'
        } ${isPlaying ? 'ring-2 ring-cyan-400/50' : ''}`}
        onClick={() => setShowControls(!showControls)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Music className={`w-6 h-6 ${isPlaying ? 'text-cyan-400' : ''}`} />
        
        {/* Playing Indicator */}
        {isPlaying && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Extended Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className={`absolute bottom-16 right-0 p-4 rounded-2xl backdrop-blur-md border min-w-[200px] ${
              isDark
                ? 'bg-black/80 border-white/20'
                : 'bg-white/80 border-black/20'
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              {/* Title */}
              <div className="text-center">
                <h3 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  {'Ambient Music'}
                </h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {'Futuristic Soundscape'}
                </p>
              </div>

              {/* Play/Pause Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={togglePlay}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPlaying
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : isDark
                      ? 'bg-white/20 text-white hover:bg-white/30'
                      : 'bg-black/20 text-black hover:bg-black/30'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-black/10 text-black hover:bg-black/20'
                  }`}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Volume Control */}
              <div className="space-y-2">
                <label className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {'Volume'}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                  style={{
                    background: `linear-gradient(to right, #06b6d4 0%, #8b5cf6 ${volume * 100}%, ${
                      isDark ? '#374151' : '#d1d5db'
                    } ${volume * 100}%, ${isDark ? '#374151' : '#d1d5db'} 100%)`,
                  }}
                />
              </div>

              {/* Info */}
              <div className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {'Soothing BGM..'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}