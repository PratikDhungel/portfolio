import Bug from '@/Icons/Bug'
import Web from '@/Icons/Web'
import Scrum from '@/Icons/Scrum'
import ReactJS from '@/Icons/ReactJS'
import Database from '@/Icons/Database'

const SkillsAndTools = () => {
  return (
    <div>
      <div className="mb-8">
        <p className="text-2xl">
          <strong className="border-b-2 pb-2">Skills and Tools</strong>
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <ReactJS className="w-6 h-6 shrink-0" />
          <p>ReactJS, NextJS, Redux, Redux Toolkit, Typescript, React Query, Zustand, MobX, MST</p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Web className="w-6 h-6 shrink-0" />
          <p>HTML, CSS, MUI, Sass, Styled Components, Tailwind</p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Database className="w-6 h-6 shrink-0" />
          <p>Git, MySQL, MongoDB, Node and Express</p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Bug className="w-6 h-6 shrink-0" />
          <p>Cypress, Katalon Studio, QA, API and UI Automation, Load Testing</p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Scrum className="w-6 h-6 shrink-0" />
          <p>Project Management Frameworks - Scrum and Kanban</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsAndTools
