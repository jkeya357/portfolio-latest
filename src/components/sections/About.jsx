import { Download, Code2, Sparkle, ShieldCheck, TestTube2 } from 'lucide-react'
import { SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql, SiRedis, SiDocker, SiOpenai } from 'react-icons/si'
import { FaJava, FaAws } from "react-icons/fa";
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import FadeIn from '../animations/FadeIn'

const About = () => {

  const skills = [
    {name: 'Java', icon: FaJava},
    {name: 'TypeScript', icon: SiTypescript},
    {name: 'JavaScript', icon: SiJavascript},
    {name: 'React', icon: SiReact},
    {name: 'Next.js', icon: SiNextdotjs},
    {name: 'Node.js', icon: SiNodedotjs},
    {name: 'Express', icon: SiExpress},
    {name: 'PostgreSQL', icon: SiPostgresql},
    {name: 'Redis', icon: SiRedis},
    {name: 'Docker', icon: SiDocker},
    {name: 'AWS', icon: FaAws},
    {name: 'OpenAI', icon: SiOpenai},
  ]

  return <section id='about' className='relative py-20 bg-black overflow-hidden'>
    <RadialGradientBackground variant='about'/>

    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-8'>
            <FadeIn delay={60}>
              <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                <Code2 className='w-4 h-4 text-primary'/>
                <span className='text-sm text-primary font-medium'>
                  {PERSONAL_INFO.title}
                </span>
                <Sparkle className='w-4 h-4 text-primary'/>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                From schema to API to UI to AWS to the Play Store, I own the whole product
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className='flex flex-col gap-4'>
                {PERSONAL_INFO.bio.map((para, index) => (
                  <p key={index} className='text-base text-white/70 leading-relaxed'>
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={300}>
            <div className='grid grid-cols-3 gap-8'>
              {ABOUT_STATS.map((stat, index) => (
                <div key={index} className='relative'>
                  <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full'></div>
                  <div className='text-3xl font-normal text-white mb-2 font-mono'>
                    {stat.value}
                  </div>
                  <p className='text-sm text-white/60 leading-snug'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <button
              onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
              className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'
            >
              <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300'/>
              Download Resume
            </button>

          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 relative group'>
              <div 
                className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl     opacity-50 group-hover:opacity-75 transition-opacity duration-300'>
              </div>
              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 bg-primary/10 rounded-xl'>
                    <Code2 className='w-6 h-6 text-primary'/>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-white mb-2'>Expertise</h3>
                    <p className='text-sm text-white/70 leading-relaxed'>
                     End-to-end owner of production software: relational data models and versioned migrations, typed REST APIs, React/TypeScript front-ends, AWS delivery and Android release. Delivered two live education platforms for Saving Grace Education Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          

            <div className='relative group'>
              <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full'>
                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                  <TestTube2 className='w-5 h-5 text-primary'/>
                </div>
                <h3 className='text-base font-semibold text-white mb-2'>Tested & Automated</h3>
                <p className='text-sm text-white/70 leading-relaxed'>
                  GitHub Actions pipelines that gate every deploy on typecheck, Vitest/Supertest unit tests and a Playwright smoke suite
                </p>
              </div>
            </div>

            <div className='relative group'>
              <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full'>
                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                  <ShieldCheck className='w-5 h-5 text-primary'/>
                </div>
                <h3 className='text-base font-semibold text-white mb-2'>Secure & Observable</h3>
                <p className='text-sm text-white/70 leading-relaxed'>
                  Strict CSP, Redis-backed rate limiting on AI endpoints, Sentry monitoring and S3 media storage to keep costs down
                </p>
              </div>
            </div>

            <div className='col-span-2 relative group'>
                <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                  <div className='grid grid-cols-3 gap-6 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary mb-1'>Plan</div>
                      <div className='text-xs text-white/60'>Design before building</div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary mb-1'>Document</div>
                      <div className='text-xs text-white/60'>So anyone can pick up the code</div>
                    </div>
                    <div>
                      <div>
                        <div className='text-2xl font-bold text-primary mb-1'>Debug</div>
                        <div className='text-xs text-white/60'>Logs and tests to root cause</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>  
        </FadeIn>
      </div>

      <FadeIn delay={500}>
        <div className='flex flex-col items-center gap-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-normal text-white mb-2'>Tech Stack & Expertise</h3>
            <p className='text-sm text-white/60'>The core technologies I build and ship production apps with</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105'
              >
                <skill.icon className='text-3xl text-primary'/>
                <div className='text-sm text-white/80 font-medium text-center'>
                  {skill.name}
                </div>

                <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300'></div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
}

export default About