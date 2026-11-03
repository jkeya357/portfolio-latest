import React, { useEffect } from 'react'
import { X, ExternalLink, Github, TrendingUp, Layers } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  const isOpen = Boolean(project)

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const { title, description, image, category, technologies, metrics, demo, githubUrl } = project

  return (
    <div
      className='fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 animate-fadeIn'
      role='dialog'
      aria-modal='true'
      aria-labelledby='project-modal-title'
    >
      <div
        className='absolute inset-0 bg-black/80 backdrop-blur-sm'
        onClick={onClose}
        aria-hidden='true'
      />

      <div className='relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl shadow-primary/10'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 p-2.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-black/80 hover:border-primary/50 transition-all duration-300'
          aria-label='Close project details'
        >
          <X className='w-5 h-5'/>
        </button>

        <div className='relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-t-3xl'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover object-top'
          />
          <div className='absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent'/>
          <div className='absolute bottom-4 left-6'>
            <span className='inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-primary bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full'>
              <Layers className='w-3.5 h-3.5'/>
              {category}
            </span>
          </div>
        </div>

        <div className='p-6 sm:p-8 space-y-6'>
          <div>
            <h3 id='project-modal-title' className='text-2xl sm:text-3xl font-semibold text-white mb-3'>
              {title}
            </h3>
            <p className='text-white/70 leading-relaxed'>
              {description}
            </p>
          </div>

          {metrics && (
            <div className='flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl'>
              <TrendingUp className='w-5 h-5 text-primary shrink-0 mt-0.5'/>
              <p className='text-sm text-white/80'>{metrics}</p>
            </div>
          )}

          <div>
            <p className='text-xs uppercase tracking-wider text-white/50 mb-3'>Technologies</p>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(demo || githubUrl) && (
            <div className='flex flex-col sm:flex-row gap-3 pt-2'>
              {demo && (
                <a
                  href={demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300'
                >
                  <ExternalLink className='w-4 h-4'/>
                  Visit Live Site
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-primary/50 transition-all duration-300'
                >
                  <Github className='w-4 h-4'/>
                  View Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
