import React from 'react'
import { motion } from "motion/react"

const Experience = () => {
  return (
    <motion.div
      id='experience'
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
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        {/* Professional experience building production-grade AI systems and cloud infrastructure. */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='max-w-3xl mx-auto'
      >
        <div className='relative border-l-2 border-gray-300 dark:border-white/30 ml-4 pl-8 pb-2'>
          <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black/80 dark:bg-white border-2 border-white dark:border-darkTheme' />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className='border border-gray-400 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 duration-500 dark:border-white/30 dark:hover:shadow-white/10 hover:bg-lightHover dark:hover:bg-darkHover/50'
          >
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4'>
              <div>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-white font-Ovo'>
                  SDE Intern
                </h3>
                <p className='text-gray-600 dark:text-white/70 font-Ovo'>
                  Aarogya ID &middot; Remote
                </p>
              </div>
              <span className='text-sm text-gray-500 dark:text-white/50 font-Ovo whitespace-nowrap'>
                Apr 2025 – Aug 2025
              </span>
            </div>

            <ul className='space-y-3 text-gray-600 dark:text-white/80 text-sm font-Ovo list-disc pl-5'>
              <li>
                Built agent-driven LLM workflows and prompt templates for extracting validated structured data from complex, multi-page medical documents, improving extraction accuracy and processing efficiency by 70%.
              </li>
              <li>
                Engineered and deployed scalable cloud-based backend services with CI/CD pipelines integrating GitHub, AWS (Lambda, API Gateway, S3, EC2), and API testing via Postman, reducing deployment time by 60%.
              </li>
              <li>
                Developed Python-based AI chatbot functionality using LLMs to understand user intent, trigger backend workflows, and deliver accurate, structured responses across healthcare document use cases.
              </li>
            </ul>

            <div className='flex flex-wrap gap-2 mt-5'>
              {[
                'CI/CD', 'AWS', 'GCP', 'Chatbot Development', 'Amazon EC2',
                'Python', 'TypeScript', 'React', 'Prompt Engineering',
                'AWS Lambda', 'Postman API', 'LLMs', 'AI Agents'
              ].map((skill) => (
                <span
                  key={skill}
                  className='px-3 py-1 text-xs font-medium rounded-full border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/10 text-gray-700 dark:text-white/80'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Experience
