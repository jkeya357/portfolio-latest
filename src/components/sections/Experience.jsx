import React from 'react'
import * as Icons from 'lucide-react'
import { Briefcase, GraduationCap, MapPin, CalendarDays, Building2 } from 'lucide-react'
import { experience, education, workingPrinciples } from '../../data/experience'
import FadeIn from '../animations/FadeIn'

const Experience = () => {
  return (
    <section id='experience' className='relative py-20 bg-black overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50'></div>
        <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn delay={0}>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
              <Briefcase className='w-4 h-4 text-primary'/>
              <span className='text-sm text-primary font-medium tracking-wider uppercase'>Career</span>
            </div>
            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
              Experience & Education
            </h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              Four years of shipping production web apps, from agency work to owning live education platforms end to end.
            </p>
          </div>
        </FadeIn>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 relative'>
            <div className='absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-primary via-primary/40 to-transparent hidden sm:block'></div>

            <div className='space-y-8'>
              {experience.map((job, index) => (
                <FadeIn key={job.id} delay={100 + index * 100}>
                  <div className='relative sm:pl-14'>
                    <div className='absolute left-2 top-7 w-4 h-4 rounded-full border-2 border-primary bg-black hidden sm:flex items-center justify-center'>
                      {job.current && <div className='w-2 h-2 rounded-full bg-primary animate-pulse'></div>}
                    </div>

                    <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300'>
                      <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4'>
                        <div>
                          <h3 className='text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300'>
                            {job.role}
                          </h3>
                          <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-white/60'>
                            <span className='inline-flex items-center gap-1.5'>
                              <Building2 className='w-4 h-4 text-primary'/>
                              {job.company}
                            </span>
                            <span className='inline-flex items-center gap-1.5'>
                              <MapPin className='w-4 h-4 text-primary'/>
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 w-fit text-xs px-3 py-1.5 rounded-full border ${job.current
                          ? 'text-primary bg-primary/10 border-primary/30'
                          : 'text-white/70 bg-white/5 border-white/10'}`}>
                          <CalendarDays className='w-3.5 h-3.5'/>
                          {job.period}
                        </span>
                      </div>

                      <p className='text-white/70 leading-relaxed mb-4'>
                        {job.description}
                      </p>

                      <ul className='space-y-2 mb-5'>
                        {job.highlights.map((item, i) => (
                          <li key={i} className='flex items-start gap-3 text-sm text-white/60 leading-relaxed'>
                            <span className='mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0'></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className='flex flex-wrap gap-2'>
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none'/>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className='space-y-8'>
            <FadeIn delay={200}>
              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10'>
                  <div className='p-2.5 bg-primary/10 border border-primary/30 rounded-xl'>
                    <GraduationCap className='w-5 h-5 text-primary'/>
                  </div>
                  <h3 className='text-xl font-medium text-white'>Education</h3>
                </div>
                {education.map((item) => (
                  <div key={item.id}>
                    <h4 className='text-base font-semibold text-white mb-1'>{item.qualification}</h4>
                    <p className='text-sm text-white/70'>{item.institution}</p>
                    <p className='text-xs text-white/50 mt-1'>{item.location} · {item.period}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10'>
                  <div className='w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full'></div>
                  <h3 className='text-xl font-medium text-white'>How I Work</h3>
                </div>
                <div className='space-y-5'>
                  {workingPrinciples.map((principle) => {
                    const IconComponent = Icons[principle.icon] || Icons.Sparkle
                    return (
                      <div key={principle.id} className='flex items-start gap-3'>
                        <div className='p-2 bg-white/5 rounded-lg shrink-0'>
                          <IconComponent className='w-4 h-4 text-primary'/>
                        </div>
                        <div>
                          <div className='text-sm font-medium text-white'>{principle.title}</div>
                          <div className='text-xs text-white/50 leading-relaxed mt-0.5'>{principle.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
