import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const projects = [
  {
    title: 'Medical Claim Document Parser',
    skills: ['React', 'Vite', 'Google Gemini API', 'pdfjs-dist', 'Framer Motion'],
    points: [
      'Built an AI-powered web app that extracts structured data from medical claim PDFs and images using LLMs.',
      'Implemented PDF rendering and multi-page previews for document processing.',
      'Designed a responsive UI with drag-and-drop uploads and animated interactions.',
    ],
  },
  {
    title: 'Library Management System',
    skills: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    points: [
      'Developed a full-stack system to manage books, members, and issue records.',
      'Built secure REST APIs with authentication and dynamic CRUD operations.',
      'Containerized the application using Docker for easy deployment.',
    ],
  },
  {
    title: 'Skill Exchange Platform',
    skills: ['Next.js', 'TypeScript', 'MongoDB', 'Firebase', 'Socket.io', 'WebRTC', 'Tailwind'],
    points: [
      'Created a platform for users to exchange skills and schedule learning sessions.',
      'Built secure APIs with authentication and role-based access control.',
      'Integrated real-time chat and peer-to-peer video communication.',
    ],
  },
]

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        A collection of projects showcasing my expertise in full-stack and AI-powered development.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className='border border-gray-300 dark:border-white/20 rounded-2xl p-6 flex flex-col bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-white/5 transition-shadow duration-500'
          >
            <div className='flex items-center gap-2 mb-3'>
              <div className='w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0'>
                <svg className='w-4 h-4 text-gray-600 dark:text-white/70' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white font-Ovo leading-tight'>
                {project.title}
              </h3>
            </div>

            <div className='flex flex-wrap gap-1.5 mb-4'>
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className='px-2 py-0.5 text-xs rounded-full border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/10 text-gray-600 dark:text-white/70'
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className='text-sm text-gray-600 dark:text-white/75 font-Ovo flex-1'>
              {project.points[0]}
            </p>

            <button
              onClick={() => setSelectedProject(project)}
              className='mt-4 text-sm font-Ovo text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white flex items-center gap-1 transition-colors duration-200 self-start'
            >
              View details
              <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm'
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className='bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white font-Ovo pr-4'>
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className='shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors'
                >
                  <svg className='w-5 h-5 text-gray-500 dark:text-white/60' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>

              <div className='flex flex-wrap gap-1.5 mb-5'>
                {selectedProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-2.5 py-1 text-xs rounded-full border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/10 text-gray-600 dark:text-white/70'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <ul className='space-y-3 text-sm text-gray-600 dark:text-white/80 font-Ovo list-disc pl-5'>
                {selectedProject.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Work
