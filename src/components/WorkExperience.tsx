import workExperienceData from '@/data/workexperience.json'

interface IWorkExperience {
  id: number
  title: string
  company: string
  start: string
  end: string
  work: string[]
}

const WorkExperience = () => {
  return (
    <div>
      <div>
        <p className="text-2xl mb-8">
          <strong className="border-b-2 pb-2">Work Experience</strong>
        </p>
      </div>

      <div className="overflow-y-scroll h-[calc(100vh-360px)] custom-scroll">
        {workExperienceData.map((eachExperience) => {
          return <WorkExperienceBlock data={eachExperience} key={eachExperience.id} />
        })}
      </div>
    </div>
  )
}

const WorkExperienceBlock = ({ data }: { data: IWorkExperience }) => {
  const { title, company, start, end, work } = data

  const workDuration = `(${start} - ${end})`

  return (
    <div className="mb-8">
      <div>
        <p className="text-xl mb-1">
          <strong>{title}</strong>
        </p>
        <p className="text-xl">
          <strong>{company}</strong>
        </p>

        <p className="text-sm mb-2">{workDuration}</p>

        <div>
          <ul className="list-disc list-inside ml-1">
            {work.map((eachWork, idx) => {
              return <li key={idx}>{eachWork}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
