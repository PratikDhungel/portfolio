const WorkExperience = () => {
  return (
    <div>
      <div>
        <p className="text-2xl mb-8">
          <strong className="border-b-2 pb-2">Work Experience</strong>
        </p>
      </div>

      <div>
        <div>
          <p className="text-xl mb-1">
            <strong>Frontend Engineer</strong>
          </p>
          <p className="text-xl">
            <strong>Returnalyze</strong>
          </p>

          <p className="text-sm mb-2">(Feb 2024 - Jan 2025)</p>

          <div>
            <ul className="list-disc list-inside ml-1">
              <li className="text-sm">
                Designed interactive charts using React (with React Highcharts) for a returns analytics platform which
                empowers brands to reduce return rates, lower operational costs and uncover hidden revenue opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
