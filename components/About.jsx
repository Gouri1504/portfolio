import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const skillCategories = [
  {
    label: 'LANGUAGES',
    icon: '>_',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'FRONTEND',
    icon: '</>',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'BACKEND',
    icon: '{}',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'DATABASES',
    icon: '[]',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'AI & GENERATIVE AI',
    icon: '~>',
    skills: ['LLM Integration', 'Prompt Engineering', 'Google Gemini API'],
  },
  {
    label: 'CLOUD & DEVOPS',
    icon: '#!',
    skills: ['AWS (EC2, S3, Lambda, API Gateway)', 'GCP (Compute Engine)', 'CI/CD Pipelines'],
  },
  {
    label: 'DEVELOPER TOOLS',
    icon: '$>',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm', 'Figma'],
  },
]

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h2
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About Me</motion.h2>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-start gap-16 my-16'>
        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none shrink-0 lg:sticky lg:top-28'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
          <div className='space-y-4 max-w-2xl font-Ovo text-gray-700 dark:text-white/85 mb-12'>
            <p>
              A Computer Science student and former Software Engineering Intern at Aarogya ID with hands-on experience building AI-powered workflows, backend services, and full-stack applications.
            </p>
            <p>
              During my internship, I worked on LLM-driven data extraction systems, cloud-based backend services, and AI chatbot functionality, gaining practical exposure to how production-grade AI systems are built and deployed.
            </p>
            <p>
              I am particularly interested in backend development, distributed systems, and full-stack engineering. I enjoy building projects, learning new technologies, and strengthening my fundamentals.
            </p>
            <p>
              My goal is to grow as a software engineer by gaining practical experience and contributing to meaningful software systems.
            </p>
          </div>

          <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 1}}
          className='border border-gray-300 dark:border-white/20 rounded-2xl p-6 sm:p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm'>
            <div className='flex items-center gap-3 mb-6'>
              <span className='text-2xl font-mono font-bold text-gray-800 dark:text-white'>&lt;/&gt;</span>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white font-Ovo'>Technical Skills</h3>
            </div>

            <div className='space-y-5'>
              {skillCategories.map((category) => (
                <div key={category.label}>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='text-xs font-mono text-gray-500 dark:text-white/40'>{category.icon}</span>
                    <span className='text-xs font-semibold tracking-widest text-gray-500 dark:text-white/50 uppercase'>
                      {category.label}
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className='px-3 py-1.5 text-sm rounded-full border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/10 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/15 transition-colors duration-200'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
