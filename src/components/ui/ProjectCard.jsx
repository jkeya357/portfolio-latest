import React from 'react'
import { ExternalLink, Github, TrendingUp, Maximize2 } from 'lucide-react'

const ProjectCard = ({ project, onOpen }) => {

    const { title, description, image, technologies, metrics, demo, githubUrl } = project

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(project)
        }
    }

    const stop = (e) => e.stopPropagation()

  return (
    <div
        onClick={() => onOpen(project)}
        onKeyDown={handleKeyDown}
        role='button'
        tabIndex={0}
        aria-label={`View details for ${title}`}
        className='group relative h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-primary/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-all duration-300'
    >
        <div className='relative h-64 overflow-hidden'>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110'
            />

            <div className='absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300'/>

            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black/60 backdrop-blur-md border border-white/20 rounded-full'>
                    <Maximize2 className='w-4 h-4 text-primary'/>
                    View details
                </span>
            </div>

            <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                {demo && (
                    <a
                        href={demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={stop}
                        className='p-2.5 bg-black/50 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 hover:scale-110 transition-all duration-300'
                        title='Open live site'
                        aria-label={`Open live site for ${title}`}
                    >
                        <ExternalLink className='w-4 h-4 text-white'/>
                    </a>
                )}

                {githubUrl && (
                    <a
                        href={githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={stop}
                        className='p-2.5 bg-black/50 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 hover:scale-110 transition-all duration-300'
                        title='View source code'
                        aria-label={`View source code for ${title}`}
                    >
                        <Github className='w-4 h-4 text-white'/>
                    </a>
                )}
            </div>
            <div className='absolute top-4 left-4'>
                <span className='px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full'>
                    {project.category}
                </span>
            </div>
        </div>

        <div className='p-6 space-y-4 flex-1 flex flex-col'>
            <div>
                <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300'>
                    {title}
                </h3>
                <p className='text-white/60 text-sm leading-relaxed line-clamp-3'>
                    {description}
                </p>
            </div>

            <div className='flex flex-wrap gap-2'>
                {technologies.slice(0, 5).map((tech) => (
                    <span
                        key={tech}
                        className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg'
                    >{tech}</span>
                ))}
                {technologies.length > 5 && (
                    <span className='px-3 py-1 text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-lg'>
                        +{technologies.length - 5} more
                    </span>
                )}
            </div>

            {metrics && (
                <div className='flex items-center gap-2 pt-3 mt-auto border-t border-white/10'>
                    <TrendingUp className='w-4 h-4 text-primary shrink-0'/>
                    <p className='text-xs text-white/60 line-clamp-1'>{metrics}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProjectCard
