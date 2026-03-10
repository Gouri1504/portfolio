import React from 'react'
import { motion } from "motion/react"

const achievements = [
  {
    title: 'Smart India Hackathon 2025',
    description: 'Secured 1st rank in the Internal Round of Smart India Hackathon 2025.',
  },
  {
    title: 'PromptRepo AI Hackathon',
    description: 'Advanced to the final round of an AI Hackathon organized by PromptRepo.',
  },
  {
    title: 'LeetCode Problem Solving',
    description: 'Solved 100+ LeetCode problems, improving skills in data structures and algorithms.',
  },
]

const Achievements = () => {
  return (
    <motion.div
      id='achievements'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Achievements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14'
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className='border border-gray-300 dark:border-white/20 rounded-xl p-6 text-center hover:shadow-lg hover:bg-lightHover dark:hover:bg-darkHover/50 duration-500'
          >
            <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10'>
              <svg className='w-6 h-6 text-gray-700 dark:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
              </svg>
            </div>
            <h3 className='font-semibold text-gray-800 dark:text-white font-Ovo mb-2'>{item.title}</h3>
            <p className='text-sm text-gray-600 dark:text-white/70 font-Ovo'>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Achievements
